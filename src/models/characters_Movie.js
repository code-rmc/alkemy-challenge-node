"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

class Characters_Movie extends Model {}
Characters_Movie.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    idMovie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Movies",
        key: "id",
      },
    },
    idCharacter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Characters",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Characters_Movie",
  }
);

module.exports = Characters_Movie;
