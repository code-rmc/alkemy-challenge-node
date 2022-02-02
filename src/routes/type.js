const { Router } = require("express");
const {
  getAllTypes,
  findByType,
  saveType,
  updateType,
  deleteType,
} = require("../controller/typeControllers");

const router = Router();

router.get("/", getAllTypes);
router.get("/:id", findByType);
router.post("/", saveType);
router.put("/:id", updateType);
router.delete("/:id", deleteType);

module.exports = router;
