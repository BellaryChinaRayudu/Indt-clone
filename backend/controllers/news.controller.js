import News from "../models/NewsFeed.Schema.js";

const getNews = async (req, res) => {
  try {
    const data = await News.find();
    console.log(data);
    res.status(200).json({ news: data, success: true });
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
};

const get = async (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  try {
    const data = await News.find({ slug });
    console.log(data);
    res.status(200).json({ news: data, success: true });
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
};

const create = async (req, res) => {
  try {
    if (!req.isadminOrnot) {
      console.log(req);
      return res.status(403).json("You are not allowed to create a news post.");
    }
    if (!req.body.title || !req.body.content) {
      res.status(400).json("Please fill up all the required fields.");
    }
    console.log(req.body);
    const slug = req.body.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
    const newNews = new News({
      ...req.body,
      slug,
      userId: req.user_id,
    });
    const result = await newNews.save();
    console.log(result);
    res.status(200).json({ result, success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json("You are not allowed to create a news post.");
  }
};

export { getNews, create, get };
