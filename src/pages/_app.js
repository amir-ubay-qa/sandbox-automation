import '@/styles/globals.css'
import Layout from './components/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>QA Web UI Sandbox</title>
        <meta name="description" content="Sandbox WebUI for QA mock testing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    )
}
