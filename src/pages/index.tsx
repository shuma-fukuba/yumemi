import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '~/components/organisms'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Content />
    </div>
  )
}

export default Home
