import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Moment from 'react-moment';
const axios = require("axios");

export default function Relacionados({ children, showLatest, titleLatest, maisAcessadas }) {
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    getDestaque();
  }, []);

  const [destaque, setAltaDestaque] = useState([]);

  async function getDestaque() {
    await axios
      .get("https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&tags=7&per_page=10")
      .then(
        (response) => {
          setAltaDestaque(response.data);
        },
        (error) => {
          alert("erro");
        }
      );
  }

  return (
    <>
<div className="related max max--margin-top">
        <h4 className="title title--small title--upper">
          {maisAcessadas? 'Mais acessadas:':'Confira também:'}
        </h4>
        <div className="related__posts">
            {destaque.map(post => (  <article key={post.id} className="loop__item" role="article">
            <div className="loop__item__thumb">
              <a
                href={"/publicacao/"+post.id+"/"+post.slug}
              >
                <img
                  className="thumb"
                  alt={post.title.rendered}
                  src={post["better_featured_image"]["source_url"]}
                  width="290"
                  height="180"
              /></a>
            </div>
            <div className="loop__item__description">
              <a className="title-cat" href={"/page/1/categoria/"+post.categories[0]+"/"+post._embedded["wp:term"][0][0].name} > {post._embedded["wp:term"][0][0].name}</a>
              <h2 className="title title--medium line-spacing font-bebas">
                <a
                   href={"/publicacao/"+post.id+"/"+post.slug}
                   dangerouslySetInnerHTML={{ __html: post.title.rendered }} ></a>
              </h2>
              <span className="byline">
                <a className="byline__item" href={"/page/1/user/"+post._embedded.author[0].id+"/"+post._embedded.author[0].slug}
                  ><img
                    className="icon"
                    src={post._embedded.author[0].avatar_urls["48"]}
                    alt=""
                  /> {post._embedded.author[0].name}</a><span className="byline__item"
                  ><img
                    className="icon"
                    src="/assets/relogio.png"
                    alt=""
                  /><Moment format="DD/MM/YYYY" date={post.date}/> </span
                >
                
              </span>
            </div>
          </article>))}
        
        </div>
      </div>
    </>
  );
}
