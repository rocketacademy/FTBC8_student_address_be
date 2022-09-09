class AddressController {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res) => {
    try {
      let addresses = await this.model.findAll();
      console.log(addresses);
      res.send(addresses);
    } catch (e) {
      res.send(e);
    }
  };
}

module.exports = AddressController;
