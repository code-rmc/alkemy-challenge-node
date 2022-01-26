"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Characters_Movies",
      [
        {
          idMovie: 1,
          idCharacter: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMovie: 1,
          idCharacter: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idMovie: 2,
          idCharacter: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Characters_Movies", null, {});
  },
};
