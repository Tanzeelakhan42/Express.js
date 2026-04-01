const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// app.get("/data", (req, res) => {
//   const html = `<ul>${data.map((item) => `<li>${item.first_name}</li>`).join("")}</ul>`;
//   return res.send(html);
// });
app.get("/api/data", (req, res) => {
  return res.json(data);
});
app.get("/api/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((item) => item.id === id);
  return res.json(user);
});
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
