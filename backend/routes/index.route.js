import authRoute from "./auth.route.js";
import movieRoute from "./movie.route.js";
import tvRoute from "./tv.route.js";
import { protectedRoute } from "../middlewares/protectedRoute.middleware.js";
const index = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/movie", protectedRoute, movieRoute);
  app.use("/api/v1/tv", protectedRoute, tvRoute);
};
export default index;
