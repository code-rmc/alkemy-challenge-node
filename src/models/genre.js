"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

// const Genre = sequelize.define(
//   "Genre",
//   {
//     genre: { type: DataTypes.STRING(50), allowNull: false },
//   },
//   { timestamps: true }
// );

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
