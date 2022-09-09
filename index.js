const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./db/models/index");
const { student, address, classes, student_classes } = db;

const StudentController = require("./Controllers/studentController.js");
const AddressController = require("./Controllers/addressController.js");

const studentController = new StudentController(
  student,
  student_classes,
  classes
);
const addressController = new AddressController(address);

const StudentRouter = require("./Routers/studentRouter.js");
const AddressRouter = require("./Routers/addressRouter.js");

const studentRouter = new StudentRouter(studentController, express).routes();
const addressRouter = new AddressRouter(addressController, express).routes();

app.use("/student", studentRouter);
app.use("/address", addressRouter);

app.listen(8080, () => {
  console.log("listening to port 8080");
});
