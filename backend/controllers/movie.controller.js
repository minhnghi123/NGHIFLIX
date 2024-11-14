import { fetchFromTMDB } from "../services/tmdb.service.js";
export const getTrendingMovie = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    return res.status(200).json({
      success: true,
      content: randomMovie,
    });
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};
export const getTrailerMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    const trailer = data.results;
    res.status(200).json({
      success: true,
      content: trailer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getDetailMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );

    res.status(200).json({
      success: true,
      content: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getSimilarMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    const similarMovies = data.results;
    res.status(200).json({
      success: true,
      content: similarMovies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getMoviesByCategories = async (req, res) => {
  try {
    const category = req.params.category;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );
    const categoryData = data.results;
    res.status(200).json({
      success: true,
      content: categoryData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
