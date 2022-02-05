const { Op } = require("sequelize");
const BaseRepository = require("./baseRepository");
const { Movie, Character } = require("../loader/database/associations");

class CharacterRepository extends BaseRepository {
  constructor() {
    super(Character);
  }

  async findAll() {
    return await this.model.findAll({
      attributes: ["id", "name", "picture"],
    });
  }

  async findById(id) {
    return await this.model.findByPk(id, {
      include: {
        model: Movie,
        attributes: ["id", "title", "picture", "creation_date", "score"],
        through: {
          attributes: [],
        },
      },
    });
  }

  async findByFilter({ name }, options) {
    return (await options) === null
      ? this.findCharactersName(name)
      : this.findCharactersOptions(name, options);
  }

  async findCharactersName(name) {
    return await this.model.findAll({
      attributes: ["id", "name", "age", "weight"],
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      include: {
        model: Movie,
        attributes: ["id", "title", "picture"],
        through: {
          attributes: [],
        },
      },
    });
  }

  async findCharactersOptions(name, { age, weight, movie }) {
    const opcAge = age
      ? {
          age: {
            [Op.like]: `%${age}%`,
          },
        }
      : null;
    const opcWeight = weight
      ? {
          weight: {
            [Op.like]: `%${weight}%`,
          },
        }
      : null;
    const opcMovie = movie
      ? {
          "$Movies.title$": {
            [Op.like]: `%${movie}%`,
          },
        }
      : null;

    // Query filter
    return await this.model.findAll({
      attributes: ["id", "name", "age", "weight"],
      where: {
        [Op.and]: [
          {
            name: {
              [Op.like]: `%${name}%`,
            },
          },
          opcAge,
          opcWeight,
          opcMovie,
        ],
      },
      include: {
        model: Movie,
        attributes: ["id", "title", "picture"],
        through: {
          attributes: [],
        },
      },
    });
  }

  async create({ movies, ...character }) {
    const newCharacter = await this.model.create(character);
    return await newCharacter.addMovies(movies);
    // let movieRelation =
    //   Object.keys(character.movies).length === 1
    //     ? character.movies[0].idMovie
    //     : Object.entries(character.movies).map((mov) => {
    //         return {
    //           idMovie: mov[1].idMovie,
    //           idCharacter: newCharacter.dataValues.id,
    //         };
    //       });
  }

  async update(id, data) {
    if (data.movies) {
      const character = await this.model.findByPk(id);
      return await character.setMovies(data.movies);
    }
    return await this.model.update(data, {
      where: { id },
    });
  }
}

module.exports = CharacterRepository;
