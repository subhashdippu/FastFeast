const express = require("express");
const router = express.Router();
const verifytoken = require("../middleware/verifyToken")
const userController = require('../controllers/UserController')
router.get("/", verifytoken, userController.getAllUsers)
router.get("/", userController.createUser)
router.delete("/:id", userController.deleteUser);
router.get("/admin/:email", userController.getAdmin);
router.patch("/admin/:id", userController.makeAdmin);

module.exports = router;