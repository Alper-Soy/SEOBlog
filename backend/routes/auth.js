const express = require('express');

const router = express.Router();

// Controllers
const { signup, signin } = require('../controllers/auth');

// Validators
const {
  userSignupValidator,
  userSigninValidator,
} = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);

module.exports = router;
