const BaseRepository = require("./baseRepository");
const { Movie } = require("../models");

class MovieRepository extends BaseRepository {
  constructor() {
    super(Movie);
  }
}

module.exports = MovieRepository;
