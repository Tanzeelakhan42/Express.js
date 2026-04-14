const express = require("express");
const data = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello from Middleware 1");
  next();
});

app.get("/data", (req, res) => {
  const html = `<ul>${data.map((item) => `<li>${item.first_name}</li>`).join("")}</ul>`;
  res.send(html);
});
app.get("/api/data", (req, res) => {
  res.json(data);
});
app.post("/api/data/", (req, res) => {
  //Todo: Create new user
  const body = req.body;
  console.log("Body=", body);
  data.push({ id: data.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
    res.json({ status: "success", message: "New user created" });
  });
});

app
  .route("/api/data/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((item) => item.id === id);
    res.json(user);
  })
  .patch((req, res) => {
    //Todo: Edit user with id
    const body = req.body;
    console.log("Body=", body);
    const id = Number(req.params.id);
    const user = data.find((item) => item.id === id);
    if (!user) {
      return res.json({ status: "User not found" });
    }
    Object.assign(user, body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
      res.json({ status: "success", message: "User updated" });
    });
  })
  .delete((req, res) => {
    //Todo: Delete user with id
    const id = Number(req.params.id);
    const newData = data.filter((item) => item.id !== id);
    if (newData.length === data.length) {
      return res.json({ status: "User not found" });
    }
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newData), (err) => {
      res.json({ status: "success", message: "User deleted" });
    });
  });

app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
