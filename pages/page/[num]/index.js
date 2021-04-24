import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Latest from "../../../components/latest";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Posts from "../../../components/posts";
import Destaques from "../../../components/destaques";
import NotFound from "../../../components/notfound";
const axios = require("axios");
var ReactSafeHtml = require("react-safe-html");
import ReactPaginate from "react-paginate";

export async function getServerSideProps(context) {
  const page = context.params.num;
  const res = await fetch(
    `https://api.segueofluxo.com/wp-json/wp/v2/posts?&_embed=1&per_page=10&page=${page}`
  );
  const data = await res.json();

  const destaques = await fetch(
    "https://api.segueofluxo.com/wp-json/wp/v2/posts?_embed=1&sticky=true&per_page=3&orderby=date"
  );
  const destaque = await destaques.json();

  console.log(data);

  return {
    props: {
      totalPages: res.headers.get("X-WP-TotalPages"),
      totalPost: res.headers.get("X-WP-Total"),
      posts: data,
      title: "Postagens",
      destaques: destaque,
      page: page,
    },
  };
}

export async function getServerSidePaths() {
  const paths = {
    params: { num: "1" },
  };

  return {
    paths,
    fallback: false,
  };
}

var destaquesStyle = {
  maxWidth: "1120px",
  maxHeight: "480px",
  margin: "auto",
};

const HomePage = ({ totalPages, totalPost, page, posts, destaques, title }) => {
  const handlePageClick = (data) => {
    let selected = data.selected;

    selected++;
    if (selected != page) {
      window.location.href = location.origin + "/page/" + selected;
    }
  };

  if (posts) {
    return (
      <>
        {console.log(posts)}
        <div className="main max" id="main" role="main">
          <Head>
            <meta charSet="utf-8" />
            <meta name="language" content="pt-BR" />
            <title>{title}</title>
            <meta name="description" content={"Busca por " + title} />
            <meta name="robots" content="none" />
            <div id="fb-root"></div>
            <script
              async
              defer
              crossorigin="anonymous"
              src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0"
              nonce="xF3GKLHk"
            ></script>
            <meta property="og:type" content="page" />
            <meta property="og:title" content={title} />
            <meta
              property="og:image"
              content="https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png"
            />
            <meta property="og:description" content="O melhor do funk" />
          </Head>

          <div style={{ maxHeight: "479px", marginTop: "22px" }} className="destaques">
            <section style={destaquesStyle} className="featured max">
              {destaques.map((res) => (
                <Destaques res={res} key={res.id}></Destaques>
              ))}
            </section>
          </div>

          <Latest showLatest="true">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Posts key={post.id} noticia={post}>
                  {" "}
                </Posts>
              ))
            ) : (
              <NotFound></NotFound>
            )}
            <ReactPaginate
              pageCount={totalPages}
              initialPage={parseInt(page - 1)}
              containerClassName={"pagination"}
              activeClassName={"active"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              nextLabel={'►'}  previousLabel={'◄'}
              pageCount={totalPages}
              pageRangeDisplayed={1}
              marginPagesDisplayed={totalPages}
            ></ReactPaginate>
          </Latest>
        </div>
      </>
    );
  } else {
    return <h1>Ainda carregando</h1>;
  }
};

export default HomePage;
