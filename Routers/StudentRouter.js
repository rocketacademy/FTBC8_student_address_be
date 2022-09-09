class StudentRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll.bind(this.controller));
    router.post(
      "/signupclass",
      this.controller.signupClass.bind(this.controller)
    );
    router.post(
      "/signupstudent",
      this.controller.insertUser.bind(this.controller)
    );
    router.put("/", this.controller.updateStudent.bind(this.controller));

    return router;
  }
}

module.exports = StudentRouter;
