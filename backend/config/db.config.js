import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.config.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB connected..."); // Show message when connected successfully.
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};
