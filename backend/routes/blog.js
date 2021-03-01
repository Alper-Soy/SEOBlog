const express = require('express');

const router = express.Router();

// Controllers
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
} = require('../controllers/blog');

// Middlewares
const { requireSignin } = require('../middlewares/requireSignin');
const { adminMiddleware } = require('../middlewares/authMiddleware');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);

module.exports = router;
