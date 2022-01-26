"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Characters",
      [
        {
          name: "Simba",
          age: "Adulto",
          weight: "84",
          history:
            "Hijo de Mufasa y Sarabi, Simba fue el siguiente a su padre en la línea para gobernar las Tierras del Reino. Sin embargo, después de que su malvado tío Scar asesinó a Mufasa y culpó a Simba por la muerte del antiguo rey, el joven cachorro de león es condenado al exilio mientras que Scar gobierna como rey. Fue entonces cuando Simba regresó a las Tierras del Reino y reclamó su trono y lugar legítimo en el gran ciclo de la vida",
          picture:
            "https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Timón",
          age: "Adulto",
          weight: "15",
          history:
            "Timón es el mejor amigo de Pumba, amigo y guardián (cuando era un cachorro) de Simba, hijo de Ma y sobrino de Tío Max. Inspirado por la idea de tener un depredador grande a su lado en The Lion King, él y Pumba toman a Simba cuando él sufre tras la muerte de su padre.",
          picture:
            "https://static.wikia.nocookie.net/disney/images/3/32/Timon-icon.png/revision/latest?cb=20170303031332&path-prefix=es",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ariel",
          age: "16",
          weight: "78",
          history:
            "Ariel es una sirena independiente, obstinada y decidida. Ella es la princesa más joven y más bonita del mar pero pasa la mayor parte de su tiempo fuera de las paredes del palacio de Atlántica cantando, soñando despierto, y aventurándose con su mejor amigo Flounder el pez guppy, y a veces Sebastian, el cangrejo que es también el consejero real de Ariel padre. A la edad de 16 años, inesperadamente se enamora profundamente de un joven y hermoso príncipe humano llamado Eric y sacrifica todas las cosas que le son queridas por la posibilidad de estar con ella un verdadero amor.",
          picture:
            "https://static.wikia.nocookie.net/disney/images/a/a0/Ariel-1.png/revision/latest?cb=20170929163212&path-prefix=es",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Characters", null, {});
  },
};
