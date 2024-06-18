import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Admin",
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("news", newsSchema);

export default News;
