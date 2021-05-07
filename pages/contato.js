import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import Latest from '../components/latest'
import Posts from '../components/posts'
const axios = require('axios')

export default function Contato() {

 
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
   <Latest>
   <h3 _ngcontent-yhe-c18="">Entre em contato conosco através do e-mail abaixo para dar sugestões de matérias, pautas ou anunciar. <br _ngcontent-yhe-c18=""></br><b _ngcontent-yhe-c18="" class="mt-2"><p _ngcontent-yhe-c18="" style={{fontWeight: 'bold'}}> - E-mail: segueofluxoenvia@gmail.com</p></b>Gentileza especificar sua demanda no assunto do e-mail.</h3>
   <div style={{marginTop:'20px'}}>
   <h3 class="confira">Confira as últimas postagens:</h3>
   {posts.map(post => (<Posts noticia={post}></Posts>))}
   </div>
   </Latest>
  
  
   </>
  );
}
