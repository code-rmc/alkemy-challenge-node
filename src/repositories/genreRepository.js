const BaseRepository = require("./baseRepository");
const { Genre } = require("../models");

class GenderRepository extends BaseRepository {
  constructor() {
    super(Genre);
  }

  async getAll() {
    return await this.model.findAll({
      attributes: ["id", "genre"],
    });
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }
}

module.exports = GenderRepository;
