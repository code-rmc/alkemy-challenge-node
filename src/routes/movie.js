const { Router } = require("express");
const {
  getAllMovies,
  getMovie,
  saveMovie,
} = require("../controller/movieControllers");

const router = Router();

router.get("/", getAllMovies);
router.get("/:id", getMovie);
router.post("/", saveMovie);
/*
router.put("/:id", );
router.delete("/:id", );
*/

module.exports = router;
