import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Latest from "../../../../../components/latest";
import Header from "../../../../../components/header";
import Footer from "../../../../../components/footer";
import Posts from "../../../../../components/posts";
import NotFound from "../../../../../components/notfound";
import ReactPaginate from 'react-paginate';
import reactPaginate from "react-paginate";
const axios = require("axios");
var ReactSafeHtml = require('react-safe-html');


let idFora;
let titleFora;

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const page = context.params.num
  idFora = id;
  titleFora = context.params.title
  const res = await fetch(
    `https://api.segueofluxo.com/wp-json/wp/v2/posts?author=${id}&_embed=1&per_page=10&page=${page}`,
  );
  const data = await res.json();
  console.log(res);

  return {
    props: {
      totalPages:res.headers.get('X-WP-TotalPages'), 
      totalPost: res.headers.get('X-WP-Total'),  
      posts: data,
      id: id,
      title: context.params.title,
      page: page },
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

const User = ({totalPages, totalPost, page, posts, title,id }) => {

  const handlePageClick = (data) => {
    let selected = data.selected;

    selected++;
    if(selected != page){
      window.location.href = location.origin+"/page/"+selected+"/user/"+id+"/"+title;
    }
  
  }


  if (posts) {
    return (
      <>
      
        {console.log(totalPages, totalPost)}
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

          <Latest titleLatest={title} showLatest={true}>
          {posts.length > 0?  posts.map(post => (<Posts key={post.id} noticia={post}> </Posts>)):<NotFound></NotFound>}
          <ReactPaginate pageCount={totalPages} initialPage={parseInt(page-1)} containerClassName={'pagination'} activeClassName={'active'}  breakLabel={'...'} breakClassName={'break-me'}  pageRangeDisplayed={4}  onPageChange={handlePageClick} nextLabel={'Próximo'}  previousLabel={'Anterior'} pageCount={totalPages} pageRangeDisplayed={1} marginPagesDisplayed={totalPages}></ReactPaginate>
          </Latest> 
        </div>
        
      </>
    );
  } else {
    return <h1>Ainda carregando</h1>;
  }
};

export default User;
