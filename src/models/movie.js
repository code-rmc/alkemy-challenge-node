"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

class Movie extends Model {}
Movie.init(
  {
    // idType: DataTypes.INTEGER,
    title: { type: DataTypes.STRING(80), allowNull: false },
    picture: { type: DataTypes.STRING, allowNull: false },
    creation_date: DataTypes.DATE,
    score: DataTypes.DECIMAL,
  },
  {
    sequelize,
    modelName: "Movie",
  }
);

module.exports = Movie;
