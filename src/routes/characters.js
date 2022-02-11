const { Router } = require("express");
const {
  getAllCharacters,
  findCharacterMovies,
  findCharacterFilter,
  saveCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controller/characterController");
const {
  postValidationCharacter,
  getByIdValidationCharacter,
  getByFilterValidationCharacter,
  putValidationCharacter,
  deleteValidationCharacter,
} = require("../middleware/character");

const router = Router();

router.get("/", getAllCharacters);
router.post("/", postValidationCharacter, saveCharacter);
router.get("/filter", getByFilterValidationCharacter, findCharacterFilter);
router.get("/:id", getByIdValidationCharacter, findCharacterMovies);
router.put("/:id", putValidationCharacter, updateCharacter);
router.delete("/:id", deleteValidationCharacter, deleteCharacter);

module.exports = router;
