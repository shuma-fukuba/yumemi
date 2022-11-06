import { memo, useEffect } from 'react'
import Header from './header'
import { useAppDispatch } from '~/hooks/redux'
import { readPrefectures } from '~/modules/features/resasSlice'
import { useCallback } from 'react'
import CheckBoxes from './checkbox'
import { css } from '@emotion/react'
import PopulationGraph from '~/components/organisms/line'

interface Props {}

const Home: React.FC<Props> = memo(() => {
  const dispatch = useAppDispatch()

  const fetchPrefectures = useCallback(() => {
    dispatch(readPrefectures())
  }, [dispatch])

  useEffect(() => {
    fetchPrefectures()
  }, [dispatch, fetchPrefectures])

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

Home.displayName = 'HomeContent'

export default Home
