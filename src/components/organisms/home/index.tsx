import { memo, useEffect } from 'react'
import Header from './header'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { readPrefectures } from '~/modules/features/resasSlice'
import { useCallback } from 'react'
import CheckBoxes from './checkbox'
import { css } from '@emotion/react'
import PopulationGraph from '~/components/organisms/chart/line'


interface Props {}

const Home: React.FC<Props> = memo(() => {
  const dispatch = useAppDispatch()
  const populations = useAppSelector(state => state.resas.populations)

  const fetchPrefectures = useCallback(() => {
    dispatch(readPrefectures())
  }, [dispatch, readPrefectures])

  useEffect(() => {
    fetchPrefectures()
  }, [dispatch, fetchPrefectures])

  console.log(populations)

  return (
    <div>
      <Header />
      <div css={MainWrapper}>
        <CheckBoxes />
        <PopulationGraph />
      </div>
    </div>
  )
})

export const MainWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`

export default Home
