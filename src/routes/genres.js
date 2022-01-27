const { Router } = require("express");
const {
  getAllGenres,
  getById,
  saveGenre,
  deleteGenre,
} = require("../controller/genreControllers");

const router = Router();

router.get("/", getAllGenres);
router.get("/:id", getById);
router.post("/", saveGenre);
router.delete("/:id", deleteGenre);
/*
router.put("/:id", );
*/

module.exports = router;
