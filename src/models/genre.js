"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

class Genre extends Model {}
Genre.init(
  {
    genre: { type: DataTypes.STRING(50), allowNull: false },
  },
  {
    sequelize,
    modelName: "Genre",
  }
);

module.exports = Genre;
