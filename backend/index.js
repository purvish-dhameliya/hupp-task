/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { connectDB } from "./config/connectDB.js";
import postRoute from "./routes/postRoute.js";
import path from "path";
import { fileURLToPath } from "url";

import { dirname } from "path";
const app = express();
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let dir = path.join(__dirname, "uploads");

app.use(express.static(dir));

connectDB();

const PORT = process.env.PORT || 8080;

mongoose.connection.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Successfully running on ${PORT}`);
  });
});
mongoose.connection.on("error", (error) => {
  console.log(`MongoDB connection error: ${error.message}`);
});

app.use("/api/v1", postRoute);
