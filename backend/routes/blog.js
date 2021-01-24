const express = require('express');

const router = express.Router();

// Controllers
const { create } = require('../controllers/blog');

// Middlewares
const { requireSignin } = require('../middlewares/requireSignin');
const { adminMiddleware } = require('../middlewares/authMiddleware');

router.post('/blog', requireSignin, adminMiddleware, create);

module.exports = router;
