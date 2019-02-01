const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

router.get('/:id', userController.show);
router.get('/new', userController.signup)
router.post('/new', userController.createSignup)
// router.get('/login', userController.login)
// router.post('/login', userController.createLogin)

module.exports = router;