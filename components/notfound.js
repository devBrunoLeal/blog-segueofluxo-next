import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import Posts from './posts'
const axios = require('axios')

export default function NotFound() {

 
useEffect(() => {
  // Atualiza o titulo do documento usando a API do browser
 getPosts();
},[]);


const [posts, setPosts] = useState([]);

async function getPosts(){
await axios.get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&per_page=10").then(
  (response) => {
   setPosts(response.data);
  },
  (error) => {
    alert("erro");
  }
);
} 


  return (
   <>
   <h1> Não foi encontrado nenhum resultado.</h1>
   <div style={{marginTop:'20px'}}>
   <h3>Confira as últimas postagens:</h3>
   {posts.map(post => (<Posts noticia={post}></Posts>))}
   </div>
  
   </>
  );
}
