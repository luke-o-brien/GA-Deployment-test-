const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

const testJwtRouter = require("./controllers/test-jwt");
const authRouter = require("./controllers/auth");
const userRouter = require("./controllers/users");
const hootsRouter = require("./controllers/hoots");

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`✅ Connected to MongoDB: ${mongoose.connection.name}`);
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/hoots", hootsRouter);
app.use("/test-jwt", testJwtRouter);

// Export the app for Vercel to route everything to
module.exports = app;
