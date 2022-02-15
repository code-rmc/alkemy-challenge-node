"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

class Genres_Movie extends Model {}
Genres_Movie.init(
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
    idGenre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Genres",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Genres_Movie",
  }
);

module.exports = Genres_Movie;
