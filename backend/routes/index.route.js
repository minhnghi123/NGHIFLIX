import authRoute from "./auth.route.js";
const index = (app) => {
  app.use("/api/v1/auth", authRoute);
};
export default index;
