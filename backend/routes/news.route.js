import express from "express";

import { getNews, create, get } from "../controllers/news.controller.js";
import verifyToken from "../middlewares/authentication.js";

const router = express.Router();

router.get("/getNews", getNews);
router.get("/get/:slug", get);
router.post("/create", verifyToken, create);

export default router;
