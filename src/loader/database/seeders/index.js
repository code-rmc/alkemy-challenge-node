const typesSeed = require("./demo-types");
const genresSeed = require("./demo-genres");
const moviesSeed = require("./demo-movies");
const charactersSeed = require("./demo-character");
const CharactersMovieSeed = require("./demo-charactersMovie");
const genresMovieSeed = require("./demo-genresMovieSeed");
const Type = require("../../../models/type");
const Genre = require("../../../models/genre");
const Movie = require("../../../models/movie");
const Character = require("../../../models/character");
const Characters_Movie = require("../../../models/characters_Movie");
const Genres_Movie = require("../../../models/genres_movies");

const generateSeeds = async () => {
  await Type.bulkCreate(typesSeed, { validate: true });
  await Genre.bulkCreate(genresSeed, { validate: true });
  await Movie.bulkCreate(moviesSeed, { validate: true });
  await Character.bulkCreate(charactersSeed, { validate: true });
  await Characters_Movie.bulkCreate(CharactersMovieSeed);
  await Genres_Movie.bulkCreate(genresMovieSeed);
};

module.exports = generateSeeds;
