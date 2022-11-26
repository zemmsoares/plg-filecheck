// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/files", (req, res) => {
  res.send("POST Request Called");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
