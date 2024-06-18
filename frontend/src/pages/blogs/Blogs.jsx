import { useEffect, useState } from "react";
import configuredUrl from "../../utils/request/request";
import "./blogs.scss";
import Newscard from "../../components/newscard/Newscard";
import BlogsCard from "../../components/blogscards/BlogsCard";

const Blogs = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await configuredUrl.get("/news/getNews");
      if (data.success) {
        setLoading(false);
        setNews(data.news);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <div className="blogs-container">
        {news?.map((item, ind) => (
          <BlogsCard item={item} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
