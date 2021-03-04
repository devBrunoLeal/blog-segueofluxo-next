import Link from 'next/Link'

export default function Posts({ noticia }) {
  return (
    <>
      <article className="loop__item" role="article">
        <div className="loop__item__thumb">
        <Link  href={"publicacao/"+noticia.id+"/"+noticia.title.rendered}>
          <a >
            <img
              className="thumb"
              alt={noticia.title.rendered}
              src={noticia["better_featured_image"]["source_url"]}
              width="290"
              height="180"
            />
          </a>
          </Link>
        </div>
        <div className="loop__item__description">
          <a className="title-cat" href="">
            {noticia._embedded["wp:term"][0][0].name}
          </a>
          <h2 className="title title--medium">
          <Link  href={"publicacao/"+noticia.id+"/"+noticia.title.rendered}>
            <a > {noticia.title.rendered}</a>
          </Link>
          </h2>
          <span className="byline">
            <span className="byline__item">
              <img
                style={{ maxWidth: "9px", paddingBottom: "4px" }}
                className="icon"
                src="assets/timer-svgrepo-com (1).svg"
                alt=""
              />
              {noticia.modified}
            </span>
          </span>
        </div>
      </article>
    </>
  );
}