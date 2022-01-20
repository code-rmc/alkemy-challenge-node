const { Router } = require("express");
const { getCharacter } = require("../controller/characterControllers");

const router = Router();

router.get("/", getCharacter);
/*
router.post("/", );
router.put("/:id", );
router.delete("/:id", );
*/

module.exports = router;
