const { Router } = require("express");
const { getMovies, saveMovie } = require("../controller/movieControllers");

const router = Router();

router.get("/", getMovies);
router.post("/", saveMovie);
/*
router.put("/:id", );
router.delete("/:id", );
*/

module.exports = router;
