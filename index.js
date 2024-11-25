const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("Hello from my first ever server.");
});

app.get("/data", (req, res) => {
  res.send("Node Coming Soon......");
});

app.listen(port, () => {
  console.log(`My first server is running on port ${port}`);
});
