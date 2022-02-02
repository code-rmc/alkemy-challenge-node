"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

// const Character = sequelize.define(
//   "Character",
//   {
//     name: { type: DataTypes.STRING(50), allowNull: false },
//     age: { type: DataTypes.STRING(50), defaultValue: "Unknown" },
//     weight: { type: DataTypes.DECIMAL, allowNull: false },
//     history: { type: DataTypes.TEXT, allowNull: false },
//     picture: { type: DataTypes.STRING, allowNull: false },
//   },
//   { timestamps: true }
// );

class Character extends Model {}
Character.init(
  {
    name: { type: DataTypes.STRING(50), allowNull: false },
    age: { type: DataTypes.STRING(50), defaultValue: "Unknown" },
    weight: { type: DataTypes.DECIMAL, allowNull: false },
    history: { type: DataTypes.TEXT, allowNull: false },
    picture: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Character",
  }
);

module.exports = Character;
