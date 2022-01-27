const BaseRepository = require("./baseRepository");
const { Character, Movie } = require("../models");
class CharacterRepository extends BaseRepository {
  constructor() {
    super(Character);
  }

  async create(data) {
    const { Character_M } = data;
    const newCharacter = await this.model.create(data);

    // ** Si envia mas de una relacion **
    const ralationNaN =
      Object.keys(Character_M).length > 1
        ? Object.keys(Character_M).map((a) => Character_M[a].idMovie)
        : Character_M.idMovie;

    // ** Agrega la relacion en la tabla "Characters_Movies" **
    return await newCharacter.addMovies(ralationNaN);
  }

  async getAll() {
    return await this.model.findAll({
      attributes: ["id", "name", "picture"],
    });
  }

  async findCharacter(id) {
    // return await this.model.findByPk(id, { include: "Movies" });
    return await this.model.findByPk(id, {
      include: {
        model: Movie,
        attributes: [
          "id",
          "idType",
          "title",
          "picture",
          "creation_date",
          "score",
        ],
        through: {
          attributes: [],
        },
      },
    });
  }
}

module.exports = CharacterRepository;
