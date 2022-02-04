const { Router } = require("express");
const {
  getAllTypes,
  findByType,
  saveType,
  updateType,
  deleteType,
} = require("../controller/typeControllers");
const {
  postValidationType,
  putValidationType,
  getByIdValidationType,
  deleteValidationType,
} = require("../middleware/type");

const router = Router();

router.get("/", getAllTypes);
router.get("/:id", getByIdValidationType, findByType);
router.post("/", postValidationType, saveType);
router.put("/:id", putValidationType, updateType);
router.delete("/:id", deleteValidationType, deleteType);

module.exports = router;
