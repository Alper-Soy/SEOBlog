const User = require('../models/user');

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;

  User.findById({ _id: authUserId })
    .select({ hashed_password: false, salt: false })
    .exec((err, user) => {
      if (err || !user)
        return res.status(400).json({ error: 'User not found!' });

      req.profile = user;
      next();
    });
};

exports.adminMiddleware = (req, res, next) => {
  const adminUserId = req.user._id;

  User.findById({ _id: adminUserId })
    .select({ hashed_password: false, salt: false })
    .exec((err, user) => {
      if (err || !user)
        return res.status(400).json({ error: 'User not found!' });

      if (user.role !== 1)
        return res
          .status(400)
          .json({ error: 'Admin resource. Access denied!' });

      req.profile = user;
      next();
    });
};
