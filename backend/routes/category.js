const express = require('express');

const router = express.Router();

// Controllers
const {
  createCategory,
  listCategories,
  readCategory,
  deleteCategory,
} = require('../controllers/category');

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
  createCategory
);

router.get('/categories', listCategories);
router.get('/category/:slug', readCategory);
router.delete(
  '/category/:slug',
  requireSignin,
  adminMiddleware,
  deleteCategory
);

module.exports = router;
