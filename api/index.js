const express = require("express");
const serverless = require("serverless-http");

const app = express();

console.log("bye")
app.get("/hoots/hi", (req, res) => {
  console.log("hi")
  res.status(200).json({ message: "hi Vercel!" });
});

module.exports = serverless(app);
