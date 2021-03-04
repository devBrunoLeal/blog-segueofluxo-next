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
var sectionStyle = {
  backgroundImage:
    "url(http://segueofluxo-com.umbler.net/upload/18-11-2021-23-18-352146272753_140935941192338_120001703584040028_n.jpg)",
};

var destaques = {
  maxWidth: "1120px",
  maxHeight: "480px",
  margin: "auto",
};
const axios = require('axios')



export default function Home() {
  const [Destaque, setDestaques] = useState([]);


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser

   getDestaque();
   getPosts()
 
  },[]);
  
 async function getDestaque(){
  await axios.get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&sticky=true&per_page=3&orderby=date").then(
    (response) => {
      return setDestaques(response.data);
    },
    (error) => {
      alert("erro");
    }
  );
 }

 const [posts, setPosts] = useState([]);

 async function getPosts(){
  await axios.get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1").then(
    (response) => {
     console.log(response.data)
      return setPosts(response.data);
    },
    (error) => {
      alert("erro");
    }
  );
 }
  
  

  return (
    <>
      <Header></Header>

      <MetaTags>
        <title>FASFSAFS</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>

      <title>Page 1</title>
      <meta
        id="meta-description"
        name="description"
        content="Some description."
      />
      <meta id="og-title" property="og:title" content="MyApp" />
      <meta id="og-image" property="og:image" content="path/to/image.jpg" />

      <div  style={{ maxHeight: "479px", marginTop: '22px'}} className="destaques">
      <section style={destaques} className="featured max">
        {Destaque.map((res) => (  <Destaques  res={res} key={res.id}></Destaques>  ))}
      </section>
      </div>
     
       <Latest  showLatest={true}>{posts.map(post => (<Posts key={post.id} noticia={post}></Posts>))}</Latest> 
      <Footer></Footer>
    </>
  );
}
