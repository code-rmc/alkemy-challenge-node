const { Router } = require("express");
const {
  getAllMovies,
  findMoviesFilter,
  findByMovies,
  saveMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movieControllers");
const {
  postValidationMovie,
  getByIdValidationMovie,
  getByFilterValidationMovie,
  putValidationMovie,
  deleteValidationMovie,
} = require("../middleware/movie");

const router = Router();

router.get("/", getAllMovies);
router.get("/filter", getByFilterValidationMovie, findMoviesFilter);
router.get("/:id", getByIdValidationMovie, findByMovies);
router.post("/", postValidationMovie, saveMovie);
router.put("/:id", putValidationMovie, updateMovie);
router.delete("/:id", deleteValidationMovie, deleteMovie);

module.exports = router;
