const { Router } = require("express");
const {
  getAllGenres,
  findByGenre,
  saveGenre,
  updateGenre,
  deleteGenre,
} = require("../controller/genreController");

const router = Router();

router.get("/", getAllGenres);
router.get("/:id", findByGenre);
router.post("/", saveGenre);
router.put("/:id", updateGenre);
router.delete("/:id", deleteGenre);

module.exports = router;
