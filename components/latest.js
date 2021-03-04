import React, { useState, useEffect } from "react";
import Link from "next/Link";
import Image from 'next/image'

const axios = require('axios')

export default function Latest({ children }) {

 
useEffect(() => {
  // Atualiza o titulo do documento usando a API do browser
 getDestaque();
},[]);
const [alta, setAlta] = useState([]);
const [altaDestaque, setAltaDestaque] = useState([]);

async function getDestaque(){
await axios.get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1").then(
  (response) => {
    console.log([response.data[0]])
  
   setAltaDestaque([response.data[0]])
   response.data.splice(0,1)
   setAlta(response.data);

  
  },
  (error) => {
    alert("erro");
  }
);
}



  


  return (
    <section>
      <div className="wrapper">
        <section className="loop col-content">
          <header className="heading max">
            <h2 className="title title--small title--section">
              Noticias 
              <span className="title__color"> Recentes</span>
            </h2>
          </header>

{/*           <header className="heading max">
            <h2 className="title title--small title--section">Teste</h2>
          </header> */}
          {children}
        </section>
        <aside className="sidebar col-sidebar" role="complementary">
          <div id="lt_social_widget-5" className="widget widget--social">
            <h4 className="title title--smaller title--upper tag-latest">
              Acompanhe a SEGUE O FLUXO!
            </h4>
            <ul style={{display: "flex"}}className="widget__social">
              <li>
                <a
                  className=""
                  href="https://www.facebook.com/segueofluxooriginal"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    layout="fill"
                    src="/assets/F.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://www.instagram.com/segueofluxooriginal/"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    layout="fill"
                    src="/assets/I.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://twitter.com/segueofluxonews"
                  target="_blank"
                  rel="noopener"
                >
                <Image
                    layout="fill"
                    src="/assets/T.png"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://www.youtube.com/c/tranemusica/"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    layout="fill"
                    src="/assets/Y.png"
                    alt="Twitter"
                  />
                </a>
              </li>
            </ul>
          </div>

          <iframe

            style={{marginTop: "40px"}}
            src="https://open.spotify.com/embed/playlist/0TNsKRkilGp0VQHQY5Z8C1"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <div
            id="custom_html-3"
            className="widget_text widget widget_custom_html"
          >
            <div className="textwidget custom-html-widget">
              {/*  Anuncio fica aqui */}
            </div>
          </div>
          <div id="lt_featured_posts_widget-5" className="widget widget--posts">
            <h4 className="title title--smaller title--upper tag-latest">
              Mais acessadas
            </h4>
            
            <ul className="widget__posts">
            
            {altaDestaque.map(destaq => (<li key={destaq.id}
                style={{
                  backgroundImage: "url("+destaq["better_featured_image"]["source_url"]+")",
                }} className="widget__posts__item"
              >
                <div className="widget__posts__item__description">
                  <a className="title-cat" href="">
                   {destaq._embedded["wp:term"][0][0].name}
                  </a>
                  <Link  href={"publicacao/"+destaq.id+"/"+destaq.title.rendered}>
                  <a  className="widget__posts__item__title">{destaq.title.rendered}</a>
                  </Link>
                 
                </div>
              </li>))}  
            
            
          
           {alta.map(post => (
             <li key={post.id} className="widget__posts__item">
                  <a className="widget__posts__item__title" href="">
                   {post.title.rendered}
                  </a>
                </li> 
          ))} 
               
          
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
