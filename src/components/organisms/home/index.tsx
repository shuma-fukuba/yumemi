import { memo } from 'react'
import Header from './header'

interface Props {}

const Home: React.FC<Props> = memo(() => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  )
})

export default Home
