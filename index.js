const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
