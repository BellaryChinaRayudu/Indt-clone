import React from "react";
import "./newscard.scss";
import { Link } from "react-router-dom";

const Newscard = ({ item }) => {
  console.log(item, "Yes");
  return (
    <Link to={`/blog?slug=${item.slug}`}>
      <div className="outer_card">
        <img src={item?.imageUrl} alt={item?.title} />
        <h1>{item.title}</h1>
        <h3>{item.content}</h3>
        <h2>By {item.author}</h2>
      </div>
    </Link>
  );
};

export default Newscard;
