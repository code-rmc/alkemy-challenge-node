const BaseRepository = require("./baseRepository");
const { Character } = require("../models");

class CharacterRepository extends BaseRepository {
  constructor() {
    super(Character);
  }

  async findCharacter(id) {
    const movies = await this.model.findByPk(id, { include: "Movies" });
    console.log(movies);
    return movies;
  }
}

module.exports = CharacterRepository;
