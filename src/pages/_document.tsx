import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  public render() {
    return (
      <Html lang="zh">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
