"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

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
