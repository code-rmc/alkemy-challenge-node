const { Router } = require("express");
const {
  loginController,
  registerController,
} = require("../controller/usersController");
const { createUser, loginUser } = require("../middleware/user");

const router = Router();

router.post("/login", loginUser, loginController);
router.post("/register", createUser, registerController);

module.exports = router;
