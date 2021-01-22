const express = require('express');

const router = express.Router();

// Controllers
const {
  createTag,
  listTag,
  readTag,
  deleteTag,
} = require('../controllers/tag');

// Middlewares
const { requireSignin } = require('../middlewares/requireSignin');
const { adminMiddleware } = require('../middlewares/authMiddleware');

// Validators
const { tagCreateValidator } = require('../validators/tag');
const { runValidation } = require('../validators');

router.post(
  '/tag',
  tagCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  createTag
);

router.get('/tags', listTag);
router.get('/tag/:slug', readTag);
router.delete('/tag/:slug', requireSignin, adminMiddleware, deleteTag);

module.exports = router;
