const Category = require('../models/category');
const slugify = require('slugify');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.createCategory = (req, res) => {
  const { name } = req.body;
  let slug = slugify(name).toLowerCase();

  let category = new Category({ name, slug });

  category.save((err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: errorHandler(err) });
    }

    res.json(data);
  });
};

exports.listCategories = (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) return res.status(400).json({ error: errorHandler(err) });

    res.json(data);
  });
};
exports.readCategory = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Category.findOne({ slug }).exec((err, category) => {
    if (err) return res.status(400).json({ error: errorHandler(err) });
    // if (!category)
    //   return res.status(400).json({ message: 'Category not found!' });

    res.json(category);
  });
};
exports.deleteCategory = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Category.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) return res.status(400).json({ error: errorHandler(err) });

    res.json({ message: 'Category deleted successfully!' });
  });
};
