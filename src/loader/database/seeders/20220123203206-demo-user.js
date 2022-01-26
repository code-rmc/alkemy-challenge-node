"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "JohnDoe",
          email: "example@example.com",
          password: "123456",
          enable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "admin",
          email: "admin@admin.com",
          password: "123456",
          enable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
