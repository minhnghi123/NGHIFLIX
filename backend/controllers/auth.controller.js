import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetToken } from "../utils/generateToken.util.js";
export async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const existingUserByEmail = await User.findOne({
      email: email,
    });
    const existingUserByUsername = await User.findOne({
      username: username,
    });
    if (existingUserByEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (existingUserByUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // console.log(salt);
    // console.log(hashedPassword);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      generateTokenAndSetToken(newUser._id, res); //jwt
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ message: "Failed to create user" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Internal server error" });
  }
}
export async function login(req, res) {
  res.send("Welcome to login");
}
export async function logout(req, res) {
  try {
    res.clearCookie("jwt-token");
    res.status(201).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
