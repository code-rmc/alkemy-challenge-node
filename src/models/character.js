"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsToMany(models.Movie, {
        through: "character_movie",
      });
    }
  }
  Character.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.DATE,
      weight: DataTypes.DECIMAL,
      history: DataTypes.TEXT,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Character",
    }
  );
  return Character;
};
