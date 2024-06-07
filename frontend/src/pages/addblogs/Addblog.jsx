import configuredUrl from "../../utils/request/request";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const Addtherapist = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(title, content, author, imageUrl);
      const { data } = await configuredUrl.post("/news/create", {
        title,
        content,
        author,
        imageUrl,
      });
      console.log(data);
      if (data.success) {
        toast.success("News Blog added successfully");
        setTitle("");
        setContent("");
        setImageUrl("");
        setAuthor("");
      } else {
        toast.error("Something went wrong");
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="add-therapist-container">
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          name="title"
          placeholder="Enter Title"
        />
        <input
          required
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          value={imageUrl}
          type="text"
          name="imageUrl"
          placeholder="Enter the Image Url"
        />
        <textarea
          rows={5}
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          type="text"
          name="content"
          placeholder="Enter the description"
        />
        <input
          required
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          value={author}
          type="text"
          name="author"
          placeholder="Enter the Author Name"
        />
        <button>Add Blog</button>
      </form>
    </section>
  );
};

export default Addtherapist;
