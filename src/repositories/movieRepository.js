const BaseRepository = require("./baseRepository");
const { Movie } = require("../models");

class MovieRepository extends BaseRepository {
  constructor() {
    super(Movie);
  }

  // imagen, título y fecha de creación.
  async getAll() {
    return await this.model.findAll({
      attributes: ["title", "picture", "creation_date"],
    });
  }

  async findById(id) {
    return await this.model.findByPk(id, { include: "Characters" });
  }
}

module.exports = MovieRepository;
