import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import { useApollo } from '../graphql/client'

import 'antd/dist/reset.css'
import './globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
