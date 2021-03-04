import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (<div className="main max"  id="main" role="main"><Component {...pageProps} /></div>)
}

export default MyApp
