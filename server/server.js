require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes/index");
const mediaRoutes = require("./routes/instructor-routes/media-routes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-type", "Authorization"],
  })
);

app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

// database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

// routes configuration

app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
