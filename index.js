const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from HomePage");
});
app.get("/about", (req, res) => {
  res.send(`Hello from ${req.query.myname} with userId ${req.query.userid}`);
});
app.listen(7000, () => console.log("Server started"));
