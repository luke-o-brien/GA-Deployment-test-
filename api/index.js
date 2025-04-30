const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/api/hoots/hi", (req, res) => {
  res.status(200).json({ message: "hi Vercel!" });
});

module.exports.handler = serverless(app);
