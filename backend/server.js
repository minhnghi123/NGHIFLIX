import express from "express";
const app = express();
import { ENV_VARS } from "./config/envVars.config.js";
import indexRoute from "./routes/index.route.js";

import { connectDB } from "./config/db.config.js";

const PORT = ENV_VARS.PORT;
connectDB();

app.use(express.json());
indexRoute(app);
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
