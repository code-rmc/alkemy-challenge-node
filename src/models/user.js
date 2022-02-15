"use strict";
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../loader/database/connection/database");
const { USER } = require("../constant/userRoles");

class User extends Model {}
User.init(
  {
    userName: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING(80), allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: USER[0] },
    enable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  },
  {
    hooks: {
      afterCreate: (record) => {
        delete record.dataValues.id;
        delete record.dataValues.password;
        delete record.dataValues.enable;
        delete record.dataValues.updatedAt;
        delete record.dataValues.createdAt;
      },
      afterUpdate: (record) => {
        delete record.dataValues.password;
      },
    },
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
