import express from "express";

import { addContactForm } from "../controllers/contactform.controller.js";

const router = express.Router();

router.post("/upload", addContactForm);

export default router;
