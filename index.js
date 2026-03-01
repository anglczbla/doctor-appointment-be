import cors from "cors";
import "dotenv/config";
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";
import mainRouter from "./routes/index.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

// api endpoint
app.use("/api", mainRouter);
//localhost:4000/api/admin/add-doctor

app.get("/", (req, res) => {
  res.send("API WORKING");
});

if (!process.env.VERCEL) {
  app.listen(port, () => console.log("Server Started", port));
}

export default app;
