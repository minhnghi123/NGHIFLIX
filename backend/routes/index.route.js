import authRoute from "./auth.route.js";
import movieRoute from "./movie.route.js";
const index = (app) => {
  app.use("/api/v1/movie", movieRoute);
  app.use("/api/v1/auth", authRoute);
};
export default index;
