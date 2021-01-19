const express = require('express');

const router = express.Router();

// Controllers
const { signup, signin, signout } = require('../controllers/auth');

// Validators
const {
  userSignupValidator,
  userSigninValidator,
} = require('../validators/auth');
const { runValidation } = require('../validators');

// Middlewares
const { requireSignin } = require('../middlewares/requireSignin');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.get('/secret', requireSignin, (req, res) => {
  res.json({ message: 'You have access to secret page' });
});

module.exports = router;
