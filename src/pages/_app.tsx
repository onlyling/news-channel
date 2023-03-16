import { ApolloProvider } from '@apollo/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useApollo } from '../graphql/client'

import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'
import './globals.css'

// eslint-disable-next-line import/no-named-as-default-member
dayjs.locale('zh-cn')

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          fontFamily: `"Noto Serif SC",serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        },
      }}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>News Channel</title>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </ConfigProvider>
  )
}
