"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      // n:1
      Movie.hasMany(models.Type, {
        foreignKey: {
          name: "id",
          target_key: "idType",
        },
      });
      // n:n
      Movie.belongsToMany(models.Character, {
        through: "Characters_Movies",
        foreignKey: "idMovie",
      });
      // n:n
      Movie.belongsToMany(models.Gender, {
        through: "Genders_Movies",
        foreignKey: "idMovie",
      });
    }
  }
  Movie.init(
    {
      idType: DataTypes.INTEGER,
      title: DataTypes.STRING,
      picture: DataTypes.STRING,
      creation_date: DataTypes.DATE,
      score: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
