const express = require('express');

const router = express.Router();

// Controllers
const { create } = require('../controllers/category');

// Middlewares
const { requireSignin } = require('../middlewares/requireSignin');
const { adminMiddleware } = require('../middlewares/authMiddleware');

// Validators
const { categoryCreateValidator } = require('../validators/category');
const { runValidation } = require('../validators');

router.post(
  '/category',
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

module.exports = router;
