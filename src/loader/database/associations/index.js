const Character = require("../../../models/character");
const Movie = require("../../../models/movie");
const Type = require("../../../models/type");
const Genre = require("../../../models/genre");
const Characters_Movie = require("../../../models/characters_Movie");
const Genres_Movie = require("../../../models/genres_movies");
const User = require("../../../models/user");

// ** Type - Movies
// 1:n
Type.hasMany(Movie, { foreignKey: "idType" });
Movie.belongsTo(Type, { foreignKey: "idType" });
// ** Characters - Movies
// n:n
Movie.belongsToMany(Character, {
  through: Characters_Movie,
  foreignKey: "idMovie",
});
Character.belongsToMany(Movie, {
  through: Characters_Movie,
  foreignKey: "idCharacter",
});
// ** Genders - Movies
// n:n
Movie.belongsToMany(Genre, {
  through: Genres_Movie,
  foreignKey: "idMovie",
});
Genre.belongsToMany(Movie, {
  through: Genres_Movie,
  foreignKey: "idGenre",
});

module.exports = {
  Character,
  Movie,
  Type,
  Genre,
  User,
};
