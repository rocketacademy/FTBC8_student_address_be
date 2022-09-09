"use strict";
const sequelize = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    static associate(models) {
      this.belongsToMany(models.student, {
        through: "student_classes",
      });
    }
  }
  Classes.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "classes",
      underscored: true,
    }
  );
  return Classes;
};
