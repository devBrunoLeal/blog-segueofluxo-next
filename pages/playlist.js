import Image from "next/image";
import Head from "next/head";

export default function Playlist() {
  return (
    <>
 <Head>
      <meta charSet="utf-8" />
    <title>Segue o Fluxo - Playlist</title>
  <meta property="og:image:secure_url" itemprop="image" content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"/>
  <meta property="og:type" content="website"/>
  <meta property="og:locale" content="pt_BR" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:site_name" content="Segue-o-Fluxo" />
   
    <meta property="og:title" content="Segue o fluxo" />
    <meta property="og:url" content="https://segueofluxo.com" />
    <meta property="og:description" content="Siga a nossa playlist" />
    <meta
      property="og:image"
      content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"
    />
    <meta data-react-helmet="true" name="description" content="Segue o fluxo  - Siga a nossa playlist"></meta>
    <meta name="google-site-verification" content="4wWHEX4N9ycRVz2DsqPZnck63Lkw_bOUxNAIJcB6XO4" />
    <meta
      property="og:image:secure_url"
      itemprop="image"
      content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"
    />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
   
      </Head>

    <div className="conteudo-playlist"> 
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/9038315062" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/1.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/2.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/3.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/4.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/5.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/6.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/7.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/8.svg" alt="Data"></Image>
    <Image style={{}} layout="fill" className="icon" src="/assets/playlist/9.svg" alt="Data"></Image>
    </div>
    </>
  );
}
