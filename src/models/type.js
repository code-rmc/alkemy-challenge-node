"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

// const Type = sequelize.define(
//   "Type",
//   {
//     type: { type: DataTypes.STRING(50), allowNull: false },
//   },
//   { timestamps: true }
// );

class Type extends Model {}
Type.init(
  {
    type: { type: DataTypes.STRING(50), allowNull: false },
  },
  {
    sequelize,
    modelName: "Type",
  }
);

module.exports = Type;
