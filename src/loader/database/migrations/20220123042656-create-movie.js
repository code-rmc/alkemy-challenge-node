"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idType: {
        type: Sequelize.INTEGER,
        refe: {
          model: "Type",
          key: "id",
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(80),
      },
      picture: {
        type: Sequelize.STRING,
      },
      creation_date: {
        type: Sequelize.DATE,
      },
      score: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Movies");
  },
};
