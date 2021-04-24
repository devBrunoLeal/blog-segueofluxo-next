import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const axios = require("axios");

export default function Latest({ children, showLatest, titleLatest }) {
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    getDestaque();
  }, []);
  const [alta, setAlta] = useState([]);
  const [altaDestaque, setAltaDestaque] = useState([]);

  async function getDestaque() {
    await axios
      .get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&tags=7&per_page=10")
      .then(
        (response) => {
          console.log([response.data[0]]);

          setAltaDestaque([response.data[0]]);
          response.data.splice(0, 1);
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
          {showLatest ? (
            <header className="heading max">
              {titleLatest ? (
                <h2 className="title title--small title--section">
                  Busca: {titleLatest}{" "}
                </h2>
              ) : (
                <h2 style={{paddingTop: '10px'}} className="title font-sabado title--small title--section">
                  Noticias
                  <span className="title__color"> Recentes</span>
                </h2>
              )}
            </header>
          ) : (
            ""
          )}

          {/*           <header className="heading max">
            <h2 className="title title--small title--section">Teste</h2>
          </header> */}
          {children}
        </section>
        <aside className="sidebar col-sidebar" role="complementary">
          <div id="lt_social_widget-5" className="widget widget--social">
           {/*  <h4 className="title tag-latest margin-correct title--smaller title--upper tag-latest">
              Acompanhe a SEGUE O FLUXO!
            </h4> */}

            <ul style={{ display: "flex", flexDirection: "column" }} className="widget__social acompanhe-list">
              <li style={{ background: "#121214"}}>
                <a
                  className=""
                  href="https://www.facebook.com/segueofluxooriginal"
                  target="_blank"
                  rel="noopener"
                >
                  <div  style={{ margin: "auto", justifyContent:'center', display: 'flex', height: '25px' }}>
                  <Image
                    style={{ objectFit: "contain", paddingRight: '40px !important', marginLeft: '-42px' }}
                    className="image-list"
                    height="34px"
                    width="30px"
                    src="/assets/facebook.svg"
                    alt="Facebook"
                  />
                    <p class="font-siga facebook-color">SIGA-NOS NO FACEBOOK</p>
                  </div>
                  
                </a>
              </li>
              <li style={{ background: "#121214"}}>
                <a
                  className=""
                  href="https://www.instagram.com/segueofluxooriginal/"
                  target="_blank"
                  rel="noopener"
                >
                  <div  style={{ margin: "auto", justifyContent:'center', display: 'flex', height: '25px' }}>
                  <Image
                    style={{ objectFit: "contain", paddingRight: '40px !important', marginLeft: '-42px' }}
                    className="image-list"
                    height="34px"
                    width="30px"
                    src="/assets/instagram.svg"
                    alt="instagram"
                  />
                    <p class="font-siga instagram-color">SIGA-NOS NO INSTAGRAM</p>
                  </div>
                </a>
              </li>
              <li style={{ background: "#121214"}}>
                <a
                  className=""
                  href="https://twitter.com/segueofluxonews"
                  target="_blank"
                  rel="noopener"
                >
                 <div  style={{ margin: "auto", justifyContent:'center', display: 'flex', height: '25px' }}>
                  <Image
                    style={{ objectFit: "contain", paddingRight: '40px !important', marginLeft: '-42px' }}
                    className="image-list"
                    height="34px"
                    width="30px"
                    src="/assets/twitter.svg"
                    alt="twitter"
                  />
                    <p class="font-siga twitter-color">SIGA-NOS NO TWITTER</p>
                  </div>
                </a>
              </li>
              <li style={{ background: "#121214"}}>
                <a
                  className=""
                  href="https://www.youtube.com/c/segueofluxooriginal/"
                  target="_blank"
                  rel="noopener"
                >
                 <div  style={{ margin: "auto", justifyContent:'center', display: 'flex', height: '25px' }}>
                  <Image
                    style={{ objectFit: "contain", paddingRight: '40px !important', marginLeft: '-42px' }}
                    className="image-list"
                    height="34px"
                    width="30px"
                    src="/assets/youtube.svg"
                    alt="youtube"
                  />
                    <p class="font-siga youtube-color">SE INCREVA NO YOUTUBE</p>
                  </div>
                
                </a>
              </li>
              <li style={{ background: "#121214"}}>
                <a
                  className=""
                  href="https://open.spotify.com/playlist/0TNsKRkilGp0VQHQY5Z8C1"
                  target="_blank"
                  rel="noopener"
                >
                 <div  style={{ margin: "auto", justifyContent:'center', display: 'flex', height: '25px' }}>
                  <Image
                    style={{ objectFit: "contain", paddingRight: '40px !important', marginLeft: '-42px' }}
                    className="image-list"
                    height="34px"
                    width="30px"
                    src="/assets/spotify.svg"
                    alt="spotify"
                  />
                    <p class="font-siga spotify-color">SIGA NOSSA PLAYLIST</p>
                  </div>
                
                </a>
              </li>
            </ul>
          </div>

          <iframe
            style={{ marginTop: "5px", width: '100%' }}
            src="https://open.spotify.com/embed/playlist/0TNsKRkilGp0VQHQY5Z8C1"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <div
            id="custom_html-3"
            className="widget_text margin-correct-top widget widget_custom_html"
          >
            <div className="textwidget custom-html-widget">
              {/*  Anuncio fica aqui */}
            </div>
          </div>
          <div id="lt_featured_posts_widget-5" className="widget margin-correct-top widget--posts">
            <h4 className="title margin-correct tag-latest title--smaller title--upper tag-latest">
              Mais acessadas
            </h4>

            <ul className="widget__posts">
              {altaDestaque.map((destaq) => (
                <li
                  key={destaq.id}
                  style={{
                    backgroundImage:
                      "url(" +
                      destaq["better_featured_image"]["source_url"] +
                      ")",
                  }}
                  className="widget__posts__item"
                >
                  <div style={
                    {fontSize: '20px'}
                  } className="widget__posts__item__description">
                    <a  className="title-cat" href={"/page/1/categoria/"+destaq.categories[0]+"/"+destaq._embedded["wp:term"][0][0].name}>
                      {destaq._embedded["wp:term"][0][0].name}
                    </a>
                   
                      <a style={{lineHeight: '19px'}} dangerouslySetInnerHTML={{ __html: destaq.title.rendered }} href={"/publicacao/"+destaq.id+"/"+destaq.slug} className="widget__posts__item__title font-bebas">
                        
                      </a>
               
                  </div>
                </li>
              ))}


               {alta.map((destaq) => (
                <li
                key={destaq.id}
                style={{
                  backgroundImage:
                    "url(" +
                    destaq["better_featured_image"]["source_url"] +
                    ")",
                }}
                className="widget__posts__item"
              >
                <div style={
                  {fontSize: '20px'}
                } className="widget__posts__item__description">
                  <a  className="title-cat" href={"/page/1/categoria/"+destaq.categories[0]+"/"+destaq._embedded["wp:term"][0][0].name}>
                    {destaq._embedded["wp:term"][0][0].name}
                  </a>
                 
                    <a style={{lineHeight: '19px'}} dangerouslySetInnerHTML={{ __html: destaq.title.rendered }} href={"/publicacao/"+destaq.id+"/"+destaq.slug} className="widget__posts__item__title font-bebas">
                      
                    </a>
             
                </div>
              </li>
              ))} 
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
