const express = require("express");

const app = express();

console.log("bye");

app.get("/hoots/hi", (req, res) => {
  console.log("hi");
  res.status(200).json({ message: "hi Vercel!" });
});

// Export app without serverless-http (simplified version)
module.exports = app;
