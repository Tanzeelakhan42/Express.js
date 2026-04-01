const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.get("/api/data", (req, res) => {
  return res.json(data);
});
app.get("/data", (req, res) => {
  const html = `<ul>${data.map((item) => `<li>${item.first_name}</li>`).join("")}</ul>`;
  return res.send(html);
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
