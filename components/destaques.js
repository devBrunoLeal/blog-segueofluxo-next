
import Link from "next/link";

export default function Destaques({res }){
    return (<>
      <article
            className="featured__item"
            style={{ maxHeight: "479px",backgroundImage: "url(" + res["better_featured_image"]["source_url"] + ")" }}
          >
            <div className="featured__item__description">
              <a href={"/page/1/categoria/"+res.categories[0]+"/"+res._embedded["wp:term"][0][0].name}  className="title-cat">{res._embedded["wp:term"][0][0].name}</a>
              <h2 className="featured__item__title title">
           
                <a href={"/publicacao/"+res.id+"/"+res.slug} className="featured__item__link">
                  {res.title.rendered}
                </a>
                
              </h2>
            </div>
          </article>
    </>)
}