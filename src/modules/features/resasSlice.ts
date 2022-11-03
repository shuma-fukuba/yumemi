import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Optional } from '~/entities/base'
import { PrefecturePopulation } from '~/entities/population'
import {
  Prefecture,
  ResponsePrefectureSchema,
  ResponsePrefecturesSchema,
} from '~/entities/prefecture'
import { RESAS_API_URI } from '~/modules/request/api'
import { AppDispatch, RootState } from '~/modules/store'
import api from '~/modules/request'

// export interface Prefecture {
//     [prefCode: number]: string
// }

interface PopulationPerYear {
  year: number
  value: number
}

export interface Population {
  prefCode: number
  data: PopulationPerYear[]
}

export interface ResasState {
  prefectures: Prefecture[]
  populations: Optional<PrefecturePopulation[]>
}

const initialState: ResasState = {
  prefectures: [],
  populations: undefined,
}

export const readPrefectures = createAsyncThunk(
  'resas/readPrefecture',
  async (_, thunkApi) => {
    try {
      const res = await api.get<ResponsePrefecturesSchema>({
        url: `${RESAS_API_URI}/prefectures`,
      })
      const { data, status } = res

      const prefectures = data.result.map((d) => new Prefecture(d))
      return { prefectures }
    } catch (error) {
      return thunkApi.rejectWithValue({ prefectures: [] })
    }
  }
)

export const resasSlice = createSlice({
  name: 'resas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readPrefectures.fulfilled, (state, action) => {
      state.prefectures = action.payload.prefectures
    })
  },
})

export default resasSlice.reducer
