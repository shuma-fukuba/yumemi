import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '~/modules/store'
import { ConfigProvider } from 'antd'
import jaJP from 'antd/lib/locale/ja_JP'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={jaJP}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
}

export default MyApp
