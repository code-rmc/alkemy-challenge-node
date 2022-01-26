"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "El Rey Leon",
          picture:
            "https://static.wikia.nocookie.net/disney/images/6/63/The_lion_king_poster.jpg/revision/latest?cb=20140316165348",
          creation_date: "1994/06/24",
          score: "4,2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "La Sirenita",
          picture:
            "https://static.wikia.nocookie.net/disney/images/a/a8/Little_mermaid_ver1_xlg.jpg/revision/latest?cb=20160923062202&path-prefix=es",
          creation_date: "1989/11/13",
          score: "3,8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
