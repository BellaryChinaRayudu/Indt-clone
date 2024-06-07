import "./blogscards.scss";
import { Link } from "react-router-dom";
const BlogsCard = ({ item }) => {
  const { imageUrl, title, content, slug, author, createdAt } = item;
  console.log(createdAt);
  const data = createdAt.split("-");
  const month = data[0];
  const date = data[1];
  return (
    <Link to={`/blog/${slug}`}>
      <section className="outer_card">
        <section className="img">
          <img src={imageUrl} />
        </section>
        <section className="content">
          <div className="creds">
            <h1>{month + " " + date + ""}</h1>
            <h1>{author}</h1>
          </div>
          <h1>{title}</h1>
          <p>{content}</p>
        </section>
      </section>
    </Link>
  );
};

export default BlogsCard;
