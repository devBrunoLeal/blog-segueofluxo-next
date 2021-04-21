import Link from 'next/link'
import {useState} from 'react'
import Moment from 'react-moment';
import Image from "next/image";
export default function Posts({ noticia }) {
let carregou = true;


  function gerarResumo(e){

  let resumo;

  resumo = e;
  resumo = resumo.replace("<p>", "");
  resumo = resumo.replace("</p>", "");
  resumo = resumo.replace(/\n/g, "");

  return resumo;
   
  }
  return (
    <>
  
      <article  className="loop__item sumir-post-mobile" role="article">
    
        <div className="loop__item__thumb">
       
        <div className={carregou? 'block1':''}>
        <div className={carregou? 'block2':''}>
        <a  href={"publicacao/"+noticia.id+"/"+noticia.slug}>
            <img
              onload={carregou=true}
              className="thumb"
              alt={noticia.title.rendered}
              src={noticia["better_featured_image"]["source_url"]}
              width="290"
              height="180"
            />
            
          </a>
         </div>
         </div>

       
       

         
         
        </div>
        <div className="loop__item__description">
          
          <a className="title-cat" href={"/page/1/categoria/"+noticia.categories[0]+"/"+noticia._embedded["wp:term"][0][0].name}>
            {noticia._embedded["wp:term"][0][0].name}
          </a>
          <h2 className="title font-bebas title--medium">
            <a href={"/publicacao/"+noticia.id+"/"+noticia.slug} dangerouslySetInnerHTML={{ __html: noticia.title.rendered }}></a>
          </h2>
          <span className="byline">
            <span className="byline__item">
               <Image
                    style={{ objectFit: "contain",maxWidth: "9px", paddingBottom: "4px", marginRight: '5px'  }}
                    height="9px"
                    className="icon"
                    width="9px"
                    src="/assets/relogio.png"
                    alt="Data"
                  />
              <Moment style={{marginLeft:'5px'}} format="DD/MM/YYYY" date={noticia.date}/> 
             
            </span>
          </span>
        </div>
      </article>



{/*  MOBILE */}

      <article style={{marginTop: '5px'}} className="jeg_post jeg_pl_md_1 format-standard sumir-post-desktop">
																		<div className="jeg_thumb"> <a href={"/publicacao/"+noticia.id+"/"+noticia.slug}>
																				<div className="thumbnail-container animate-lazy  size-715 "><img width="350" height="250"
																					  src={noticia["better_featured_image"]["source_url"]}
																						className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image" alt="" loading="lazy"
																						sizes="(max-width: 350px) 100vw, 350px"
																						data-sizes="auto" data-expand="700" data-recalc-dims="1" /></div>
																			</a>
																			<div className="jeg_post_category"> <span><a href={"/page/1/categoria/"+noticia.categories[0]+"/"+noticia._embedded["wp:term"][0][0].name} className="category-destaques">{noticia._embedded["wp:term"][0][0].name}</a></span>
																			</div>
																		</div>
																		<div className="jeg_postblock_content">
																			<h3 className="jeg_post_title font-bebas font-size"> <a href={"/publicacao/"+noticia.id+"/"+noticia.slug}  dangerouslySetInnerHTML={{ __html: noticia.title.rendered }}></a></h3>
																			<div dangerouslySetInnerHTML={{ __html: noticia.excerpt.rendered }} className="jeg_post_excerpt post-resumo">
																			
																			</div>
																			<div className="jeg_post_meta">
																				<div className="jeg_meta_author"><span className="by">by</span> <a style={{color: 'black'}} href={"/page/1/user/" +noticia._embedded.author[0].id + "/" +noticia._embedded.author[0].slug}>{noticia._embedded.author[0].name}</a></div>
																				<div className="jeg_meta_date"><a href="veja-o-que-aconteceu-com-o-dj-r7.html"><i className="fa fa-clock-o"></i>   <Moment format="DD/MM/YYYY" date={noticia.date}/> </a>
																				</div>
																			</div>
																		</div>
																	</article>
    </>
  );
}
