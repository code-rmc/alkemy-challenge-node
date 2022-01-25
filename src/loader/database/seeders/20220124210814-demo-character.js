"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "Ariel",
          age: "16",
          weight: "78",
          history:
            "Ariel es una sirena independiente, obstinada y decidida. Ella es la princesa más joven y más bonita del mar pero pasa la mayor parte de su tiempo fuera de las paredes del palacio de Atlántica cantando, soñando despierto, y aventurándose con su mejor amigo Flounder el pez guppy, y a veces Sebastian, el cangrejo que es también el consejero real de Ariel padre. A la edad de 16 años, inesperadamente se enamora profundamente de un joven y hermoso príncipe humano llamado Eric y sacrifica todas las cosas que le son queridas por la posibilidad de estar con ella un verdadero amor.",
          picture:
            "https://static.wikia.nocookie.net/disney/images/a/a0/Ariel-1.png/revision/latest?cb=20170929163212&path-prefix=es",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
