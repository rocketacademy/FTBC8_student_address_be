"use strict";
const sequelize = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student_Class extends Model {
    static associate(models) {
      this.belongsTo(models.student);
      this.belongsTo(models.classes);
    }
  }
  Student_Class.init(
    {
      StudentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "student",
          key: "id",
        },
      },
      ClassId: {
        type: DataTypes.INTEGER,
        references: {
          model: "classes",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "student_classes",
      underscored: true,
    }
  );
  return Student_Class;
};
