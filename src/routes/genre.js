const { Router } = require("express");
const {
  getAllGenres,
  findByGenre,
  saveGenre,
  updateGenre,
  deleteGenre,
} = require("../controller/genreController");
const {
  getByIdValidationGenre,
  postValidationGenre,
  putValidationGenre,
  deleteValidationGenre,
} = require("../middleware/genre");

const router = Router();

router.get("/", getAllGenres);
router.get("/:id", getByIdValidationGenre, findByGenre);
router.post("/", postValidationGenre, saveGenre);
router.put("/:id", putValidationGenre, updateGenre);
router.delete("/:id", deleteValidationGenre, deleteGenre);

module.exports = router;
