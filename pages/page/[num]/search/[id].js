import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Latest from "../../../../components/latest"
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Posts from "../../../../components/posts";
import NotFound from "../../../../components/notfound";
const axios = require("axios");
var ReactSafeHtml = require('react-safe-html');



export async function getServerSideProps(context) {
  const id = context.params.id;
  const page = context.params.num
  const res = await fetch(
    `https://api.segueofluxo.com/wp-json/wp/v2/posts?search=${id}&_embed=1&per_page=2&page=${page}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { posts: data,title:id, page: page },
  };

}

export async function getServerSidePaths() {

  const paths = {
      params: {num: '1', id: 'filter'},
    };

  return {
    paths,
    fallback: false,
  };
}

const Search = ({ posts, title }) => {
  if (posts) {
    return (
      <>
      
        {console.log(posts)}
        <div className="main max" id="main" role="main">
          <Head>
          <meta charSet="utf-8" />
            <meta name="language" content="pt-BR" />
            <title>{title}</title>
            <meta name="description" content={'Busca por '+title}/>
            <meta name="robots" content="none" />
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0" nonce="xF3GKLHk"></script>
            <meta property="og:type" content="page" />
            <meta property="og:title" content={title} />
            <meta
              property="og:image"
              content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"
            />
            <meta property="og:description" content="O melhor do funk"/>
          </Head>

          <Latest titleLatest={title} showLatest="true">
          {posts.length > 0?  posts.map(post => (<Posts key={post.id} noticia={post}> </Posts>)):<NotFound></NotFound>}
          </Latest>
        </div>
        
      </>
    );
  } else {
    return <h1>Ainda carregando</h1>;
  }
};

export default Search;
