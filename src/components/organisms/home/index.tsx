import { memo, useEffect } from 'react'
import api from '~/modules/request'
import { RESAS_API_URI } from '~/modules/request/api'
import Header from './header'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { readPrefectures } from '~/modules/features/resasSlice'

interface Props {}

const Home: React.FC<Props> = memo(() => {
  const dispatch = useAppDispatch()
  const { prefectures } = useAppSelector((state) => state.resas)

  useEffect(() => {
    dispatch(readPrefectures())
    console.log(prefectures)
  })

  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  )
})

export default Home
