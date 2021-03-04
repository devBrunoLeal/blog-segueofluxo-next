import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";


const axios = require("axios");
function Publicacao({ Component, pageProps }) {
  const [carregando, setCarregamento] = useState(true);
  const [post, setPostagem] = useState();
  
  const router = useRouter();
  const { id, title } = router.query;



  useEffect(() => {
    getPostagem();
  }, []);
  
  
  
  
  async function getPostagem(num) {
    await axios
      .get(`https://api.segueofluxo.com/wp-json/wp/v2/posts/${id}?_embed=1`)
      .then(
        (response) => {
          console.log(response.data);
          setCarregamento(false);
          setPostagem(response.data);
        },
        (error) => {
          alert("erro");
        }
      );
  }


  if (carregando) {
    return <h1> Carregando </h1>;
  }

  

  if (post) {
    return (
      <>
       
     
      </>
    );
  } else {
    return <h1>Ainda carregando</h1>;
  }
}

export default Publicacao;
