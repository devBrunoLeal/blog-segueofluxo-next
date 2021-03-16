import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MetaTags from "react-meta-tags";
import Header from "../components/header";
import Destaques from "../components/destaques"
import Footer from "../components/footer";
import Latest from "../components/latest"
import Posts from "../components/posts"
import ReactPaginate from 'react-paginate';
var sectionStyle = {
  backgroundImage:
    "url(http://segueofluxo-com.umbler.net/upload/18-11-2021-23-18-352146272753_140935941192338_120001703584040028_n.jpg)",
};

var destaques = {
  maxWidth: "1120px",
  margin: "auto",
};
const axios = require('axios')


  



export default function Home({destaque, post, totalPages}) {
  const [Destaque, setDestaques] = useState([]);


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser

 
  },[]);
  






 const handlePageClick = (data) => {
  let selected = data.selected;

  selected++;
  if(selected != 1){
    window.location.href = location.origin+"/page/"+selected;
  }

}
  
  

  return (
    <>
      <Head>
      <meta charSet="utf-8" />
    <title>Segue o Fluxo - Um dos maiores portal de noticias sobre Funk.</title>
  <meta property="og:image:secure_url" itemprop="image" content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"/>
  <meta property="og:type" content="website"/>
  <meta property="og:locale" content="pt_BR" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:site_name" content="Segue-o-Fluxo" />
    <meta property="og:title" content="Segue o fluxo" />
    <meta property="og:url" content="https://segueofluxo.com" />
    <meta property="og:description" content="Um dos maiores portal de noticias sobre Funk." />
    <meta
      property="og:image"
      content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"
    />
     <base href="/" />
    <meta data-react-helmet="true" name="description" content="Segue o fluxo  - Um dos maiores portal de noticias sobre Funk."></meta>
    <meta name="google-site-verification" content="4wWHEX4N9ycRVz2DsqPZnck63Lkw_bOUxNAIJcB6XO4" />
    <meta
      property="og:image:secure_url"
      itemprop="image"
      content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"
    />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
      </Head>

      <div  style={{ marginTop: '22px'}} className="destaques destaque-home-index">
      <section style={destaques} className="featured featured-index-home max">
        {destaque.map((res) => (  <Destaques  res={res} key={res.id}></Destaques>  ))}
      </section>
      </div>
     
       <Latest  showLatest={true}>{post.map(p => (<Posts key={p.id} noticia={p}></Posts>))}
       <ReactPaginate pageCount={totalPages} initialPage={parseInt(0)} containerClassName={'pagination'} activeClassName={'active'}  breakLabel={'...'} breakClassName={'break-me'}  pageRangeDisplayed={4}  onPageChange={handlePageClick} nextLabel={'Próximo'}  previousLabel={'Anterior'} pageCount={totalPages} pageRangeDisplayed={1} marginPagesDisplayed={totalPages}></ReactPaginate></Latest> 
   
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&sticky=true&per_page=3&orderby=date`
  );
  const data = await res.json();

  
  let pages;
  let responsee
  await axios.get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&per_page=10").then(
    (response) => {
   pages = response.headers["x-wp-totalpages"]
    responsee = response.data;
    },
    (error) => {
      alert("erro");
    }
  );
  return {
    props: { destaque: data, post: responsee, totalPages: pages },revalidate:1
  }
}