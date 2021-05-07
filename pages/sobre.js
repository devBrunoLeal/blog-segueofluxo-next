import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import Latest from '../components/latest'
import Posts from '../components/posts'
const axios = require('axios')

export default function Sobre() {

 
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
   <div style={{marginTop: '40px'}} _ngcontent-yhe-c16="" class=" mt-4"><p _ngcontent-yhe-c16=""><span style={{fontSize: '20px'}}><span >A <b ><span style={{color: '#0033ff'}} tabindex="0">Segue o Fluxo</span></b> é uma marca totalmente independente que foi criada em <b _ngcontent-yhe-c16="">2012</b>, com a intenção de promover o FUNK e enaltecer a cultura por todo o Brasil. Temos o intuito de aproximar mais ainda a comunidade que nos acompanha com os artistas que eles mais gostam, &nbsp;através das novidades e curiosidades que acontecem no dia a dia. Hoje contamos com uma equipe muito bem preparada, trabalhamos com seriedade e transparencia buscando sempre a veracidade das informações trazidas aqui no portal. Somos a primeira página a trazer esse segmento totalmente voltado a massa Funkeira, e esperamos poder contar com vocês para continuar trilhando essa jornada.</span></span></p><p _ngcontent-yhe-c16=""><b _ngcontent-yhe-c16=""><span _ngcontent-yhe-c16="" style={{fontSize: '20px'}}></span></b></p></div>
   <div style={{marginTop:'20px'}}>
   <h3 class='confira'>Confira as últimas postagens:</h3>
   {posts.map(post => (<Posts noticia={post}></Posts>))}
   </div>
   </Latest>
  
  
   </>
  );
}
