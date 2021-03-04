import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {

  return (
    <>
    <Header></Header>
   <div className="main max" style={{background: 'white', maxWidth: '1120px', margin: 'auto'}} id="main" role="main">
    <Component {...pageProps} />
    </div>
    <Footer></Footer>
   </>)
}

export default MyApp
