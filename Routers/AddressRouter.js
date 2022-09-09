class AddressRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll.bind(this.controller));

    return router;
  }
}

module.exports = AddressRouter;
