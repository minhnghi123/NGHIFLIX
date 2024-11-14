import express from "express";
import {
  getTrendingMovie,
  getTrailerMovie,
  getDetailMovie,
  getSimilarMovie,
  getMoviesByCategories,
} from "../controllers/movie.controller.js";

const router = express.Router();
router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getTrailerMovie);
router.get("/:id/details", getDetailMovie);
router.get("/:id/similars", getSimilarMovie);
router.get("/:category", getMoviesByCategories);
export default router;
