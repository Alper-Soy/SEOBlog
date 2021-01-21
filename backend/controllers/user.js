const User = require('../models/user');

exports.getUser = (req, res) => {
  return res.json(req.profile);
};
