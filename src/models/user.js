"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");

// const User = sequelize.define(
//   "User",
//   {
//     userName: { type: DataTypes.STRING(50), allowNull: false },
//     email: { type: DataTypes.STRING(80), allowNull: false, unique: true },
//     password: { type: DataTypes.STRING, allowNull: false },
//     enable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
//   },
//   { timestamps: true }
// );

class User extends Model {}
User.init(
  {
    userName: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING(80), allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    enable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
