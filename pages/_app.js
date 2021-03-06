import '../styles/globals.scss'
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GEFJ9QSZEP"></script>

<script data-ad-client="ca-pub-5421390053730005" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-GEFJ9QSZEP');
        `,
    }}
  />
     </Head>
    <Header></Header>
   <div className="main max" style={{background: 'white', maxWidth: '1120px', margin: 'auto'}} id="main" role="main">
    <Component {...pageProps} />
    </div>
    <Footer></Footer>
   </>)
}

export default MyApp
