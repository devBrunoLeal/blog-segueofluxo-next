import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import Moment from "react-moment";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Latest from "../../../components/latest";
import Header from "../../../components/header";
import Relacionados from "../../../components/relacionados";
import Footer from "../../../components/footer";
const axios = require("axios");
var ReactSafeHtml = require("react-safe-html");
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://api.segueofluxo.com/wp-json/wp/v2/posts/${id}?_embed=1`);
  const data = await res.json();

  data.resumo = data.excerpt.rendered;
  data.resumo = data.resumo.replace("<p>", "");
  data.resumo = data.resumo.replace("</p>", "");
  data.resumo = data.resumo.replace(/\n/g, "");


   data.title.rendered = data.title.rendered.replace(/&#8220;/g,'“');
   data.title.rendered = data.title.rendered.replace(/&#8221;/g,'”')

  return {
    props: { post: data },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://api.segueofluxo.com/wp-json/wp/v2/posts`);
  const data = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id.toString(), title: item.slug },
  }));

  /* const paths = [{params: {id: '69', title: 'salvador-da-rima-e-agredido-por-policiais-dentro-de-casa-e-levado-preso'}}]
   */

  return {
    paths,
    fallback: true,
  };
}

const Publicacao = ({ post }) => {



  if (post) {
    return (
      <>
        {console.log(post)}
        <div className="main max" id="main" role="main">
          <Head>
            <meta charSet="utf-8" />
            <meta name="google-site-verification" content="4wWHEX4N9ycRVz2DsqPZnck63Lkw_bOUxNAIJcB6XO4" />
            <meta name="language" content="pt-BR" />
            <title>{post.title.rendered}</title>
            <meta name="description" content={post.resumo} />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="author" content={post._embedded.author[0].name} />
            <meta name="keywords" content={post._embedded["wp:term"][1].map((tag) => tag.name)} />
            <meta property="og:site_name" content="Segue o fluxo" />

            <meta property="article:published_time" content={post.date} />
            <meta property="article:modified_time" content={post.modified} />
            <meta property="article:publisher" content="https://www.facebook.com/segueofluxooriginal/" />
            <meta property="article:author" content={post._embedded.author[0].name} />
            <meta property="og:image:width" content="758" />
            <meta property="og:image:height" content="424" />

            <meta property="og:type" content="page" />
            <meta property="og:url" content={"https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug} />

            <meta property="og:title" content={post.title.rendered} />
            <meta property="og:image" content={post["better_featured_image"]["source_url"]} />
            <meta property="og:description" content={post.resumo} />

            <meta property="article:author" content={post._embedded.author[0].name} />
            <meta property="og:image:secure_url" itemprop="image" content={post["better_featured_image"]["source_url"]} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@segueofluxonews" />
            <meta name="twitter:title" content={post.title.rendered} />
            <meta name="twitter:creator" content="@segueofluxonews" />
            <meta name="twitter:description" content={post.resumo} />
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0" nonce="xF3GKLHk"></script>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html:
                  ' { "@context": "https://schema.org", "@type": "NewsArticle", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://google.com/article" }, "headline": ' +
                  '"' +
                  post.title.rendered +
                  '"' +
                  ', "image": [ ' +
                  '"' +
                  post["better_featured_image"]["source_url"] +
                  '"' +
                  ", " +
                  '"' +
                  post["better_featured_image"]["source_url"] +
                  '"' +
                  ", " +
                  '"' +
                  post["better_featured_image"]["source_url"] +
                  '"' +
                  ' ], "datePublished": ' +
                  '"' +
                  post.date +
                  '"' +
                  ', "dateModified": ' +
                  '"' +
                  post.modified +
                  '"' +
                  ', "author": { "@type": "Person", "name": ' +
                  '"' +
                  post._embedded.author[0].name +
                  '"' +
                  ' }, "publisher": { "@type": "Organization", "name": "Segue o fluxo", "logo": { "@type": "ImageObject", "url": "https://api.segueofluxo.com/wp-content/uploads/2021/02/70871127_822907708123959_3608893476449550336_n.png" } } }',
              }}
            ></script>
          </Head>

          <Latest>
            <main className="main max" id="main" role="main">
              <div className="wrapper">
                <section style={{ width: "100%" }} className="content-area col-content">
                  <header className="heading max">
                    <a href={"/page/1/categoria/" + post.categories[0] + "/" + post._embedded["wp:term"][0][0].name} className="title-cat">
                      {post._embedded["wp:term"][0][0].name}
                    </a>
                    <h1 className="title title--big" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
                    <div className="sub-titulo">
                      <p className="sub-titulo" dangerouslySetInnerHTML={{ __html: post.resumo }}></p>
                    </div>
                    <hr />
                    <span className="byline">
                      <a className="byline__item" href={"/page/1/user/" + post._embedded.author[0].id + "/" + post._embedded.author[0].slug}>
                        <img className="icon" src={post._embedded.author[0].avatar_urls["48"]} alt="" />

                        {post._embedded.author[0].name}
                      </a>
                      <span className="byline__item">
                        <img className="icon" style={{ maxWidth: "9px", paddingBottom: "4px" }} src={"../../assets/timer-svgrepo-com (1).svg"} alt="" />
                        <Moment format="DD/MM/YYYY" date={post.date} />
                      </span>
                      <div className="share">
                        <b className="share__title">compartilhe:</b>
                        <a
                          className="share__button"
                          href={
                            "https://www.facebook.com/sharer.php?display=page&u=https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug + "%3Futm_medium%3Dshare-bar%26utm_source%3Dfacebook"
                          }
                          target="blank"
                          rel="noopener"
                        >
                          <img className="icon" src="../../assets/facebook.png" alt="Compartilhar no Facebook" />
                        </a>
                        <a className="share__button" href={"https://twitter.com/intent/tweet?url=https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug} target="blank" rel="noopener">
                          <img className="icon" src="../../assets/twitter.png" alt="Compartilhar no Twitter" />
                        </a>
                        <a className="share__button" href={"https://api.whatsapp.com/send?text=https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug} target="blank" rel="noopener">
                          <img className="icon" src="../../assets/wp.png" alt="Compartilhar no Whatsapp" />
                        </a>
                      </div>
                    </span>
                  </header>
                  <article
                    role="article"
                    id="post-100506"
                    className="content-area__body content max post-100506 post type-post status-publish format-standard has-post-thumbnail hentry category-rap-nacional tag-lancamentos"
                  >
                    <figure className="wp-block-image size-large">
                      <img loading="lazy" width="758" height="424" src={post["better_featured_image"]["source_url"]} alt="" className="wp-image-100507" sizes="(max-width: 758px) 100vw, 758px" />
                    </figure>
                    <div className="post-content"
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    ></div>
                  </article>
                  <footer className="content-area__footer max">
                    <ul className="content-area__tags">
                      <li>
                        {post._embedded["wp:term"][1].map((tag) =>
                          tag ? (
                            <a style={{ marginRight: "5px", marginTop: "3px" }} href={"/page/1/tags/" + tag.id + "/" + tag.slug} rel="tag">
                              {tag.name}
                            </a>
                          ) : (
                            ""
                          )
                        )}
                      </li>
                    </ul>
                    <div className="share">
                      <b className="share__title">compartilhe:</b>
                      <a
                        className="share__button"
                        href={
                          "https://www.facebook.com/sharer.php?display=page&u=https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug + "%3Futm_medium%3Dshare-bar%26utm_source%3Dfacebook"
                        }
                        target="blank"
                        rel="noopener"
                      >
                        <img className="icon" src="../../assets/facebook.png" alt="Compartilhar no Facebook" />
                      </a>
                      <a className="share__button" href={"https://twitter.com/intent/tweet?url=https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug} target="blank" rel="noopener">
                        <img className="icon" src="../../assets/twitter.png" alt="Compartilhar no Twitter" />
                      </a>
                      <a className="share__button" href={"https://api.whatsapp.com/send?text=https://segueofluxo.com/publicacao/" + post.id + "/" + post.slug} target="blank" rel="noopener">
                        <img className="icon" src="../../assets/wp.png" alt="Compartilhar no Whatsapp" />
                      </a>
                    </div>
                    <div className="author max">
                      <span className="author__avatar">
                        <img src={post._embedded.author[0].avatar_urls["48"]} width="90" height="90" alt="user.name" className="avatar avatar-90 wp-user-avatar wp-user-avatar-90 alignnone photo" />
                      </span>
                      <div className="author__bio">
                        <b className="title title--smaller">
                          <a href={"/page/1/user/" + post._embedded.author[0].id + "/" + post._embedded.author[0].slug} rel="author">
                            {post._embedded.author[0].name}
                          </a>
                        </b>
                        {post._embedded.author[0].description}
                        <ul style={{ display: "none" }} className="author__social">
                          <li>
                            <a href="user.facebook" target="_blank" rel="noopener nofollow">
                              <img src="../../assets/facebook.png" alt="Facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="user.twitter" target="_blank" rel="noopener nofollow">
                              <img src="../../assets/twitter.png" alt="Twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="user.instagram" target="_blank" rel="noopener nofollow">
                              <img src="../../assets/instagram.png" alt="Instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </footer>
                  <div className="comments max max--margin-top" id="comments">
                    <h4 className="title title--small title--upper">Comentários:</h4>
                    <div
                      className="fb-comments"
                      data-href={"https://www.facebook.com/sharer/sharer.php?u=https://segueofluxo.com/publicacao/" + post.id + "/" + post.title.rendered}
                      data-width="730"
                      data-numposts="5"
                    ></div>
                  </div>
                  <Relacionados></Relacionados>
                  {/* <div className="related max max--margin-top">
        <h4 className="title title--small title--upper">
          Confira tambémm:
        </h4>
        <div className="related__posts">
          <article className="loop__item" role="article">
            <div className="loop__item__thumb">
              <a
                href="vndroid-e-yannick-hara-se-unem-em-novo-single-cyberpunk-confira.html"
              >
                <img
                  className="thumb"
                  alt="VNDROID e Yannick Hara se unem em novo single &ldquo;CYBERPUNK&rdquo;; confira"
                  src="images/01-yannick-hara-2020-290x180.jpg"
                  width="290"
                  height="180"
              /></a>
            </div>
            <div className="loop__item__description">
              <a className="title-cat" href="rap-nacional.html">Rap Nacional</a>
              <h2 className="title title--medium">
                <a
                  href="vndroid-e-yannick-hara-se-unem-em-novo-single-cyberpunk-confira.html"
                  >VNDROID e Yannick Hara se unem em novo single
                  &ldquo;CYBERPUNK&rdquo;; confira</a
                >
              </h2>
              <span className="byline">
                <a className="byline__item" href="bruno-oliveira.html"
                  ><img
                    className="icon"
                    src="images/icons-user.svg"
                    alt=""
                  />Bruno Oliveira G.</a
                ><span className="byline__item"
                  ><img
                    className="icon"
                    src="images/icons-time.svg"
                    alt=""
                  />15/01/2021</span
                >
                <div className="share">
                  <b className="share__title">compartilhe:</b
                  ><a
                    className="share__button"
                    href="https://www.facebook.com/sharer/sharer.php?u=https://rap24horas.com.br/2021/01/15/vndroid-e-yannick-hara-se-unem-em-novo-single-cyberpunk-confira/"
                    target="blank"
                    rel="noopener"
                    ><img
                      className="icon"
                      src="images/icons-share-facebook.svg"
                      alt="Compartilhar no Facebook" /></a
                  ><a
                    className="share__button"
                    href="https://twitter.com/intent/tweet?text=VNDROID%20e%20Yannick%20Hara%20se%20unem%20em%20novo%20single%20%E2%80%9CCYBERPUNK%E2%80%9D;%20confira+https://rap24horas.com.br/2021/01/15/vndroid-e-yannick-hara-se-unem-em-novo-single-cyberpunk-confira/+via%20@rap24horasblog"
                    target="blank"
                    rel="noopener"
                    ><img
                      className="icon"
                      src="images/icons-share-twitter.svg"
                      alt="Compartilhar no Twitter" /></a
                  ><a
                    className="share__button"
                    href="https://api.whatsapp.com/send?text=https://rap24horas.com.br/2021/01/15/vndroid-e-yannick-hara-se-unem-em-novo-single-cyberpunk-confira/VNDROID%20e%20Yannick%20Hara%20se%20unem%20em%20novo%20single%20%E2%80%9CCYBERPUNK%E2%80%9D;%20confira"
                    target="blank"
                    rel="noopener"
                    ><img
                      className="icon"
                      src="images/icons-share-whatsapp.svg"
                      alt="Compartilhar no Whatsapp"
                  /></a></div
              ></span>
            </div>
          </article>
        </div>
      </div> */}

                  <div className="instagram max">
                    <span className="instagram__icon">
                      <img className="icon" src="../../assets/instagram.png" alt="Instagram" />
                    </span>
                    <h4 className="title title--medium">Nos siga no Instagram também!</h4>
                    <p>E não perca nenhuma novidade sobre o mundo do Funk. Nos siga clicando no botão abaixo.</p>
                    <a className="title-cat" href="https://www.instagram.com/segueofluxooriginal/" target="_blank" rel="noopener">
                      Seguir!
                    </a>
                    <small className="instagram__note">
                      <span className="instagram__color">*</span> CONTEÚDOS EXCLUSIVOS!
                    </small>
                  </div>
                </section>
              </div>
            </main>
          </Latest>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Publicacao;
