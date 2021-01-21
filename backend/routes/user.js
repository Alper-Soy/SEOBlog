const express = require('express');

const router = express.Router();

// Controllers
const { getUser } = require('../controllers/user');

// Middlewares
const { requireSignin } = require('../middlewares/requireSignin');
const {
  authMiddleware,
  adminMiddleware,
} = require('../middlewares/authMiddleware');

router.get('/profile', requireSignin, authMiddleware, getUser);

module.exports = router;
