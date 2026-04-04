const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.get("/data", (req, res) => {
  const html = `<ul>${data.map((item) => `<li>${item.first_name}</li>`).join("")}</ul>`;
  return res.send(html);
});

app.get("/api/data", (req, res) => {
  return res.json(data);
});
app.post("/api/data", (req, res) => {
  //Todo: Create new user
  const body = req.body;
  console.log(body);

  return res.json({ status: "pending" });
});

app
  .route("/api/data/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = data.find((item) => item.id === id);
    return res.json(user);
  })

  .patch((req, res) => {
    //Todo:Edit the user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //Todo:Delete the user with id
    return res.json({ status: "pending" });
  });

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
