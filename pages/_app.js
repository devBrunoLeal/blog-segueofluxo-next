import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from "next/head";
function MyApp({ Component, pageProps }) {

  return (
    <>
     <Head>

<meta name="msapplication-navbutton-color" content="#1647b5"/>
<meta name="theme-color" content="#1647b5"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="#1647b5"/>

{/*  Global site tag (gtag.js) - Google Analytics  */}
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){'{'}dataLayer.push(arguments){'}'}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>
     </Head>
    <Header></Header>
   <div className="main max" style={{background: 'white', maxWidth: '1120px', margin: 'auto'}} id="main" role="main">
    <Component {...pageProps} />
    </div>
    <Footer></Footer>
   </>)
}

export default MyApp
