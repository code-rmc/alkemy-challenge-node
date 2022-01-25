const { Router } = require("express");
const {
  getCharacter,
  createCharacter,
} = require("../controller/characterController");

const router = Router();

router.get("/", getCharacter);
router.post("/", createCharacter);
/*
router.put("/:id", );
router.delete("/:id", );
*/

module.exports = router;
