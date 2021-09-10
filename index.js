const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/SocietyManager");

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("from port 3000");
});
