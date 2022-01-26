const { Router } = require("express");
const {
  getCharacter,
  createCharacter,
  findCharacterMovies,
} = require("../controller/characterController");

const router = Router();

router.get("/", getCharacter);
router.get("/:id", findCharacterMovies);
router.post("/", createCharacter);
/*
router.put("/:id", );
router.delete("/:id", );
*/

module.exports = router;
