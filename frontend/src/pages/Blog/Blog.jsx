import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import configuredUrl from "../../utils/request/request";
import "./Blog.scss";

export default function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await configuredUrl.get(`/news/get/${slug}`);
        setBlog(data.news[0]);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(blog);
  return (
    <div className="blog">
      <h1 className="head">News Blog</h1>
      <section>
        <img src={blog.imageUrl} alt="blog image" />
      </section>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
