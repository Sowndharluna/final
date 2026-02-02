import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://krs007sowndhar_db_user:sowndharluna001@cluster0.ktymh4k.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅ Server running on port: ${PORT}`)
    );
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });