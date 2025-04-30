const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const serverless = require("serverless-http");
// const mongoose = require("mongoose");
// const cors = require("cors");
const logger = require("morgan");

// const testJwtRouter = require("../controllers/test-jwt");
// const authRouter = require("../controllers/auth");
// const userRouter = require("../controllers/users");
const hootsRouter = require("../controllers/hoots");

const app = express();

let isConnected = false;
// async function connectDB() {
//   if (!isConnected) {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
//   }
// }
// connectDB();

// app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// app.use("/api/auth", authRouter);
// app.use("/api/users", userRouter);
app.use("/api/hoots", hootsRouter);
// app.use("/api/test-jwt", testJwtRouter);

module.exports.handler = serverless(app);
