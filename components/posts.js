import Link from 'next/link'
import Moment from 'react-moment';
import Image from "next/image";
export default function Posts({ noticia }) {

  
  return (
    <>
      <article className="loop__item" role="article">
        <div className="loop__item__thumb">
       
          <a  href={"publicacao/"+noticia.id+"/"+noticia.slug}>
            <img
              className="thumb"
              alt={noticia.title.rendered}
              src={noticia["better_featured_image"]["source_url"]}
              width="290"
              height="180"
            />
          </a>
         
        </div>
        <div className="loop__item__description">
          
          <a className="title-cat" href={"/page/1/categoria/"+noticia.categories[0]+"/"+noticia._embedded["wp:term"][0][0].name}>
            {noticia._embedded["wp:term"][0][0].name}
          </a>
          <h2 className="title title--medium">
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
    </>
  );
}
