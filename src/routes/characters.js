const { Router } = require("express");
const {
  getCharacters,
  getCharacterMovies,
  createCharacter,
  deleteUser,
} = require("../controller/characterController");
const {
  postValidationCharacter,
  deleteValidationCharacter,
} = require("../middleware/character/character");
const router = Router();

router.get("/", getCharacters);
router.get("/:id", getCharacterMovies);
router.post("/", postValidationCharacter, createCharacter);
router.delete("/:id", deleteValidationCharacter, deleteUser);
/*
router.put("/:id", );
*/

module.exports = router;
