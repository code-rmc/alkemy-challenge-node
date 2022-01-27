"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Movie, {
        through: "Genre_Movies",
        foreignKey: "idGender",
      });
    }
  }
  Genre.init(
    {
      genre: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Genre",
    }
  );
  return Genre;
};
