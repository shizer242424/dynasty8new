const express = require("express");
const app = express();
const path = require("path");

// folder ze stroną
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serwer działa na porcie " + PORT);
});