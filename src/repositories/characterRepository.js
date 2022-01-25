const BaseRepository = require("./baseRepository");
const db = require("../models").sequelize.models;

class CharacterRepository extends BaseRepository {
  constructor() {
    super(db, "Character");
  }
}

module.exports = CharacterRepository;
