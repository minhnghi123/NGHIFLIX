import express from "express";
import {
  getTrendingTV,
  getTrailerTV,
  getDetailTV,
  getSimilarTV,
  getTVByCategories,
} from "../controllers/tv.controller.js";

const router = express.Router();
router.get("/trending", getTrendingTV);
router.get("/:id/trailers", getTrailerTV);
router.get("/:id/details", getDetailTV);
router.get("/:id/similars", getSimilarTV);
router.get("/:category", getTVByCategories);
export default router;
