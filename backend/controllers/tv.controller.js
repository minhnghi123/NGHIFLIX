import { fetchFromTMDB } from "../services/tmdb.service.js";
export const getTrendingTV = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    const randomTV =
      data.results[Math.floor(Math.random() * data.results?.length)];
    return res.status(200).json({
      success: true,
      content: randomTV,
    });
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};
export const getTrailerTV = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    console.log(data);
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
export const getDetailTV = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
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
export const getSimilarTV = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
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
export const getTVByCategories = async (req, res) => {
  try {
    const category = req.params.category;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
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
