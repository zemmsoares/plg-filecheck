const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/data", function (req, res) {
  //console.log(req.body.name);
  //console.log(req.body.email);
  console.log(req.body);
});

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
