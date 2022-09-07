const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./db/models/index");
const { student, address } = db;

// Route
app.get("/student", async (req, res) => {
  //  Controller
  let students = await student.findAll();
  console.log(students);
  res.send(students);
});

app.get("/address", async (req, res) => {
  //  Controller
  let addresses = await address.findAll();
  console.log(addresses);
  res.send(addresses);
});

app.listen(8080, () => {
  console.log("listening to port 8080");
});
