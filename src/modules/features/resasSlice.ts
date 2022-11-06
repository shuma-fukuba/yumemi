import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PrefecturePopulation } from '~/entities/population'
import { Prefecture, ResponsePrefecturesSchema } from '~/entities/prefecture'
import { RESAS_API_URI } from '~/modules/request/api'
import { AppDispatch, RootState } from '~/modules/store'
import api from '~/modules/request'
import { ResponsePopulationsSchema } from '~/entities/population'

interface PopulationPerYear {
  year: number
  value: number
}

export interface Population {
  prefCode: number
  data: PopulationPerYear[]
}

export interface LineChartDataSchema {
  year: number
  [prefCode: number]: number
}

export interface ResasState {
  prefectures: Prefecture[]
  populations: PrefecturePopulation[]
  selectedPrefectures: number[]
  loadingMarkers: boolean
}

const initialState: ResasState = {
  prefectures: [],
  populations: [],
  selectedPrefectures: [],
  loadingMarkers: false,
}

export const readPrefectures = createAsyncThunk(
  'resas/readPrefecture',
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(updateLoadingMarkers(true))
      const res = await api.get<ResponsePrefecturesSchema>({
        url: `${RESAS_API_URI}/prefectures`,
      })
      const { data, status } = res

      const prefectures = data.result.map((d) => new Prefecture(d))
      thunkApi.dispatch(updateLoadingMarkers(false))
      return { prefectures }
    } catch (error) {
      thunkApi.dispatch(updateLoadingMarkers(false))
      return thunkApi.rejectWithValue({ prefectures: [] })
    }
  }
)

export const readPopulations = createAsyncThunk<
  { populations: PrefecturePopulation[] },
  { prefectureIds: number[] },
  { dispatch: AppDispatch; state: RootState }
>('resas/reawdPopulations', async ({ prefectureIds }, thunkApi) => {
  const readPopulationByPrefectureId: (
    prefectureId: number
  ) => Promise<ResponsePopulationsSchema> = async (prefectureId: number) => {
    try {
      const res = await api.get<ResponsePopulationsSchema>({
        url: `${RESAS_API_URI}/population/composition/perYear`,
        params: { prefCode: prefectureId },
      })
      return res.data
    } catch (error) {
      throw error
    }
  }
  thunkApi.dispatch(updateSelectedPrefectures(prefectureIds))

  try {
    const populations = await Promise.all(
      prefectureIds.map(async (prefectureId) => {
        const responsePopulation = await readPopulationByPrefectureId(
          prefectureId
        )
        const population = responsePopulation.result.data.find(
          (d) => d.label === '総人口'
        )
        return new PrefecturePopulation(population, prefectureId)
      })
    )

    return { populations }
  } catch (error) {
    return thunkApi.rejectWithValue({ populations: [] })
  }
})

export const resasSlice = createSlice({
  name: 'resas',
  initialState,
  reducers: {
    updateSelectedPrefectures: (state, action) => {
      state.selectedPrefectures = action.payload
    },
    updateLoadingMarkers: (state, action) => {
      state.loadingMarkers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readPrefectures.fulfilled, (state, action) => {
        state.prefectures = action.payload.prefectures
      })
      .addCase(readPopulations.fulfilled, (state, action) => {
        state.populations = action.payload.populations
      })
  },
})

export const { updateSelectedPrefectures, updateLoadingMarkers } =
  resasSlice.actions

export default resasSlice.reducer
