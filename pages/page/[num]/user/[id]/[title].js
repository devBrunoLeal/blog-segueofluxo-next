import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Latest from "../../../../../components/latest";
import Header from "../../../../../components/header";
import Footer from "../../../../../components/footer";
import Posts from "../../../../../components/posts";
const axios = require("axios");
var ReactSafeHtml = require('react-safe-html');



export async function getServerSideProps(context) {
  const id = context.params.id;
  const page = context.params.num
  const res = await fetch(
    `https://api.segueofluxo.com/wp-json/wp/v2/posts?author=${id}&_embed=1&per_page=2&page=${page}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { posts: data, title: context.params.title, page: page },
  };

}

export async function getServerSidePaths() {

  const paths = {
      params: {num:'1', id: '1', title: '1' },
    };

  return {
    paths,
    fallback: false,
  };
}

const User = ({ posts, title }) => {
  if (posts) {
    return (
      <>
      <Header></Header>
        {console.log(posts)}
        <div className="main max" id="main" role="main">
          <Head>
            <meta charSet="utf-8" />
            <meta name="language" content="pt-BR" />
            <title>{title}</title>
            <meta name="description" content={posts[0].title.rendered} />
            <meta name="robots" content="none" />
            <meta name="author" content={posts[0]._embedded.author[0].name} />
            <meta name="keywords" content="segueofluxo, funk ,noticia" />
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0" nonce="xF3GKLHk"></script>
            <meta property="og:type" content="page" />
            <meta
              property="og:url"
              content={
                "https://blog-segueofluxo-next.vercel.app/User/" +
                posts[0].id +
                "/" +
                posts[0].title.rendered
              }
            />
            <meta property="og:title" content={posts[0].title.rendered} />
            <meta
              property="og:image"
              content={posts[0]["better_featured_image"]["source_url"]}
            />
            <meta property="og:description" content={posts[0].resumo} />

            <meta
              property="article:author"
              content={posts[0]._embedded.author[0].name}
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:title" content={posts[0].title.rendered} />
            <meta name="twitter:creator" content="@" />
            <meta name="twitter:description" content="" />
          </Head>

          <Latest titleLatest={title} showLatest="true">
          {posts.map(post => (<Posts key={post.id} noticia={post}> </Posts>))}  
          </Latest>
        </div>
        <Footer></Footer>
      </>
    );
  } else {
    return <h1>Ainda carregando</h1>;
  }
};

export default User;
