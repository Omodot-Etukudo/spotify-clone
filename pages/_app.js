import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <> <Head><title>Clone &#8211; Web Player</title></Head>  <Component {...pageProps} /> </>
}

export default MyApp
