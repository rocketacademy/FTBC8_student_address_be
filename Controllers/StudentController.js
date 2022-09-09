class StudentController {
  constructor(model, student_classes, classes) {
    this.model = model;
    this.student_classes = student_classes;
    this.classes = classes;
  }

  getAll = async (req, res) => {
    try {
      let students = await this.model.findAll();
      console.log(students);
      res.send(students);
    } catch (e) {
      res.send(e);
    }
  };

  // make a signup user request to insert user as well as the class / classes they have sign up for

  insertUser = async (req, res) => {
    console.log("inserting");
    try {
      const { name, email, age, selectedClassesIds } = req.body;
      const newStudent = await this.model.create({
        name: name,
        email: email,
        age: age,
      });

      console.log(newStudent);
      console.log(selectedClassesIds);
      console.log(typeof selectedClassesIds);

      selectedClassesIds.forEach(async (element) => {
        await this.student_classes.create({
          studentId: newStudent.dataValues.id,
          classId: element,
        });
      });

      // using the inbuilt/ dynamic methods of sequelize. - > combined with the newStudent
      // const selectedClasses = await this.classes.findAll({
      //   where: {
      //     id: selectedClassesIds,
      //   },
      // });

      // await newStudent.setClasses(selectedClasses);
    } catch (e) {
      console.log(e);
    }
    res.send("Done");
  };

  // example sample (not tested!)
  updateStudent = async (req, res) => {
    console.log("update!");
    const { id } = req.body;
    console.log(id);
    const student = await this.model.findByPk(id);

    student.set({
      name: "Rocket Student",
    });

    await student.save();

    res.send("Saved!");
  };

  // NO ROUTER SET UP
  delete = async (req, res) => {
    console.log("delete!");
    const { id } = req.body;
    console.log(id);
    const student = await this.model.findByPk(id);

    await student.destroy();

    res.send("Saved!");
  };

  signupClass = async (req, res) => {
    let { student_id, class_id } = req.body;
    console.log(student_id, class_id);

    let insert = await this.student_classes.create({
      studentId: student_id,
      classId: class_id,
    });

    res.send(insert);
  };
}

module.exports = StudentController;
