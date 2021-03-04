import { MetaTags } from "react-meta-tags";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Latest from "../../../../../components/latest";

const axios = require("axios");
function Publicacao({ Component, pageProps }) {
  const [carregando, setCarregamento] = useState(true);
  const [post, setPostagem] = useState();
  
  const router = useRouter();
  const { id, title } = router.query;



  useEffect(() => {
    getPostagem();
  }, []);
  
  
  
  
  async function getPostagem(num) {
    await axios
      .get(`https://api.segueofluxo.com/wp-json/wp/v2/posts/${id}?_embed=1`)
      .then(
        (response) => {
          console.log(response.data);
          setCarregamento(false);
          setPostagem(response.data);
        },
        (error) => {
          alert("erro");
        }
      );
  }


  if (carregando) {
    return <h1> Carregando </h1>;
  }

  

  if (post) {
    return (
      <>
        {console.log(post)}
        <div className="main max" id="main" role="main">
          <Head>
            <title>PAGE TWO</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </Head>

          <h1>Publicacao</h1>
        </div>

        <Latest>
          <main className="main max" id="main" role="main">
            <div className="wrapper">
              <section style={{width: "100%" }} className="content-area col-content">
                <header className="heading max">
                  <a className="title-cat">
                    {post._embedded["wp:term"][0][0].name}
                  </a>
                  <h1 className="title title--big">{post.title.rendered}</h1>
                  <div className="sub-titulo">
                    <p className="sub-titulo">{post.title.rendered}</p>
                  </div>
                  <hr />
                  <span className="byline">
                    <a className="byline__item">
                      <img className="icon" src={post._embedded.author[0].avatar_urls["48"]} alt="" />
                      {post._embedded.author[0].name}
                    </a>
                    <span className="byline__item">
                      <img
                        className="icon"
                        style={{maxWidth:"9px", paddingBottom: "4px"}}
                        src={"../../assets/timer-svgrepo-com (1).svg"}
                        alt=""
                      />
                      {post.modified}
                    </span>
                    <div className="share">
                      <b className="share__title">compartilhe:</b>
                      <a
                        className="share__button"
                        href="https://www.facebook.com/sharer/sharer.php?u=linkAtual"
                        target="blank"
                        rel="noopener"
                      >
                        <img
                          className="icon"
                          src="../../assets/facebook.png"
                          alt="Compartilhar no Facebook"
                        />
                      </a>
                      <a
                        className="share__button"
                        href="'https://twitter.com/intent/tweet?url='+linkAtual"
                        target="blank"
                        rel="noopener"
                      >
                        <img
                          className="icon"
                          src="../../assets/twitter.png"
                          alt="Compartilhar no Twitter"
                        />
                      </a>
                      <a
                        className="share__button"
                        href="'https://api.whatsapp.com/send?text='+linkAtual"
                        target="blank"
                        rel="noopener"
                      >
                        <img
                          className="icon"
                          src="../../assets/wp.png"
                          alt="Compartilhar no Whatsapp"
                        />
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
                    <img
                      loading="lazy"
                      width="758"
                      height="424"
                      src={post["better_featured_image"]["source_url"]}
                      alt=""
                      className="wp-image-100507"
                      sizes="(max-width: 758px) 100vw, 758px"
                    />
                  </figure>
                  <div >
                    <p>CONTEUDO PUBLI</p>
                  </div>
                </article>
                <footer className="content-area__footer max">
                  {/* <ul className="content-area__tags">
          <li>
              <a href="lancamentos.html" rel="tag">Lançamentos</a>
            </li>
          </ul> */}
                  <div className="share">
                    <b className="share__title">compartilhe:</b>
                    <a
                      className="share__button"
                      href="'https://www.facebook.com/sharer/sharer.php?u='+linkAtual"
                      target="blank"
                      rel="noopener"
                    >
                      <img
                        className="icon"
                        src="../../assets/facebook.png"
                        alt="Compartilhar no Facebook"
                      />
                    </a>
                    <a
                      className="share__button"
                      href="'https://twitter.com/intent/tweet?url='+linkAtual"
                      target="blank"
                      rel="noopener"
                    >
                      <img
                        className="icon"
                        src="../../assets/twitter.png"
                        alt="Compartilhar no Twitter"
                      />
                    </a>
                    <a
                      className="share__button"
                      href="'https://api.whatsapp.com/send?text='+linkAtual"
                      target="blank"
                      rel="noopener"
                    >
                      <img
                        className="icon"
                        src="../../assets/wp.png"
                        alt="Compartilhar no Whatsapp"
                      />
                    </a>
                  </div>
                  <div className="author max">
                    <span className="author__avatar">
                      <img
                        src={post._embedded.author[0].avatar_urls["48"]}
                        width="90"
                        height="90"
                        alt="user.name"
                        className="avatar avatar-90 wp-user-avatar wp-user-avatar-90 alignnone photo"
                      />
                    </span>
                    <div className="author__bio">
                      <b className="title title--smaller">
                        <a rel="author">{post._embedded.author[0].name}</a>
                      </b>
                      {post._embedded.author[0].description}
                      <ul className="author__social">
                        <li>
                          <a
                            href="user.facebook"
                            target="_blank"
                            rel="noopener nofollow"
                          >
                            <img
                              src="../../assets/facebook.png"
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="user.twitter"
                            target="_blank"
                            rel="noopener nofollow"
                          >
                            <img src="../../assets/twitter.png" alt="Twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="user.instagram"
                            target="_blank"
                            rel="noopener nofollow"
                          >
                            <img
                              src="../../assets/instagram.png"
                              alt="Instagram"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </footer>
                <div className="comments max max--margin-top" id="comments">
                  <h4 className="title title--small title--upper">Comentários:</h4>
                  <div id="frame_idd"></div>
                </div>

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
                    <img
                      className="icon"
                      src="../../assets/instagram.png"
                      alt="Instagram"
                    />
                  </span>
                  <h4 className="title title--medium">
                    Nos siga no Instagram também!
                  </h4>
                  <p>
                    E não perca nenhuma novidade sobre o mundo do Funk. Nos siga
                    clicando no botão abaixo.
                  </p>
                  <a
                    className="title-cat"
                    href="https://www.instagram.com/segueofluxooriginal/"
                    target="_blank"
                    rel="noopener"
                  >
                    Seguir!
                  </a>
                  <small className="instagram__note">
                    <span className="instagram__color">*</span> CONTEÚDOS
                    EXCLUSIVOS!
                  </small>
                </div>
              </section>
            </div>
          </main>
        </Latest>
      </>
    );
  } else {
    return <h1>Ainda carregando</h1>;
  }
}

export default Publicacao;
