const BaseRepository = require("./baseRepository");
const { Genre } = require("../loader/database/associations");

class GenreRepository extends BaseRepository {
  constructor() {
    super(Genre);
  }
}

module.exports = GenreRepository;
