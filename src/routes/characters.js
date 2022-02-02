const { Router } = require("express");
const {
  getAllCharacters,
  findCharacterMovies,
  findCharacterFilter,
  saveCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controller/characterController");

const router = Router();

router.get("/", getAllCharacters);
router.get("/filter", findCharacterFilter);
router.post("/", saveCharacter);
router.get("/:id", findCharacterMovies);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
