const { Op } = require("sequelize");
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

  async findByFilter({ name }, options) {
    return (await !!options.genre)
      ? this.findMoviesOptions(name, options)
      : this.findMoviesName(name, options);
  }

  async findMoviesName(name, { sort }) {
    return await this.model.findAll({
      attributes: ["id", "title", "picture", "creation_date", "score"],
      where: {
        title: {
          [Op.like]: `%${name}%`,
        },
      },
      include: [
        { model: Type, attributes: ["type"] },
        {
          model: Genre,
          attributes: ["genre"],
          through: {
            attributes: [],
          },
        },
      ],
      order: [["creation_date", sort]],
    });
  }

  async findMoviesOptions(name, { genre, sort }) {
    const opcGenre = genre
      ? {
          "$Genres.genre$": {
            [Op.like]: `%${genre}%`,
          },
        }
      : null;

    // Query filter
    return await this.model.findAll({
      where: {
        [Op.and]: [
          {
            title: {
              [Op.like]: `%${name}%`,
            },
          },
          opcGenre,
        ],
      },
      include: [
        { model: Type, attributes: ["type"] },
        {
          model: Genre,
          attributes: ["genre"],
          through: {
            attributes: [],
          },
        },
      ],
      order: [["creation_date", sort]],
    });
  }

  async create({ genres, ...movie }) {
    const newMovie = await this.model.create(movie);
    return await newMovie.addGenres(genres);
  }

  async update(id, data) {
    if (data.genres) {
      const movie = await this.model.findByPk(id);
      return await movie.setGenres(data.genres);
    }
    return await this.model.update(data, {
      where: { id },
    });
  }
}

module.exports = MovieRepository;
