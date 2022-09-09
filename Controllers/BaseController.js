class BaseController {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res) => {
    try {
      let data = await this.model.findAll();
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  };
}

module.exports = BaseController;
