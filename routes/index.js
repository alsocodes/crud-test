const user = require("../controller/user/index");
let router = require("express").Router();
const jwt = require('../middleware/index')

// Create user baru
router.post("/user/register", user.create);

// Login user
router.post("/user/login", user.login);

// Read semua user
router.get("/user", jwt.authenticateToken, user.findAll);

// Read satu user
router.get("/user/:id", jwt.authenticateToken, user.findOne);

// Update user
router.put("/user/:id", jwt.authenticateToken, user.update);

// Delete user
router.delete("/user/:id", jwt.authenticateToken, user.delete);


module.exports = { router }