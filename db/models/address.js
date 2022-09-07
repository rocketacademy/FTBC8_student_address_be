"use strict";
const sequelize = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.student);
    }
  }
  Address.init(
    {
      address: DataTypes.STRING,
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "student",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "address",
      underscored: true,
    }
  );
  return Address;
};
