const http = require("http");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.end("Hello from HomePage");
});
app.get("/about", (req, res) => {
  res.end("Hello from AboutPage");
});
const myServer = http.createServer(app);
myServer.listen(7000, () => console.log("Server started"));
