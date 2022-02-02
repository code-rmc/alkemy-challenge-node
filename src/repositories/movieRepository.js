const BaseRepository = require("./baseRepository");
const {
  Movie,
  Character,
  Type,
  Genre,
} = require("../loader/database/associations");
class MovieRepository extends BaseRepository {
  constructor() {
    super(Movie);
  }

  async findAll() {
    return await this.model.findAll({
      attributes: ["id", "title", "picture", "creation_date"],
    });
  }

  async create({ genres, ...movie }) {
    const newMovie = await this.model.create(movie);
    return await newMovie.addGenres(genres);
  }

  async findById(id) {
    return await this.model.findByPk(id, {
      attributes: ["id", "title", "picture", "creation_date", "score"],
      include: [
        { model: Type, attributes: ["type"] },
        {
          model: Genre,
          attributes: ["genre"],
          through: {
            attributes: [],
          },
        },
        {
          model: Character,
          attributes: ["id", "name", "age", "weight", "picture"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  }
}

module.exports = MovieRepository;
