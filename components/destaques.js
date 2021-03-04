
import Link from "next/link";

export default function Destaques({res }){
    return (<>
      <article
            className="featured__item"
            style={{ backgroundImage: "url(" + res["better_featured_image"]["source_url"] + ")" }}
          >
            <div className="featured__item__description">
              <a className="title-cat">{res._embedded["wp:term"][0][0].name}</a>
              <h2 className="featured__item__title title">
              <Link href="/publicacao">
                <a className="featured__item__link" href="">
                  {res.title.rendered}
                </a>
                </Link>
              </h2>
            </div>
          </article>
    </>)
}