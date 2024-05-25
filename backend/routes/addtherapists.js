import express from "express";
import verifyToken from "../middlewares/authentication.js";
import {
  addTherapist,
  getAllTherapists,
  getIndividualTherapist,
  getBasedOnCondition,
} from "../controllers/therapist.controller.js";
import upload from "../middlewares/multerPhoto.js";
const router = express.Router();

router.post(
  "/add-therapist",
  verifyToken,
  upload.single("image"),
  addTherapist
);
router.get("/get-therapist", getAllTherapists);
router.get("/get-individual-therapist/:id", getIndividualTherapist);
router.get("/get-based", getBasedOnCondition);
export default router;
