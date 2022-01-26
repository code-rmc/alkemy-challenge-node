"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    static associate(models) {
      // define association here
      Gender.belongsToMany(models.Movie, {
        through: "Genders_Movies",
        foreignKey: "idGender",
      });
    }
  }
  Gender.init(
    {
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Gender",
    }
  );
  return Gender;
};
