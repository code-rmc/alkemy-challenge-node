const { Router } = require("express");
const {
  getAllMovies,
  findMoviesFilter,
  findByMovies,
  saveMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movieControllers");

const router = Router();

router.get("/", getAllMovies);
router.get("/filter", findMoviesFilter);
router.get("/:id", findByMovies);
router.post("/", saveMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
