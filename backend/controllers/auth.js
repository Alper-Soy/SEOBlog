const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) return res.status(400).json({ error: 'Email is already taken' });

    const username = shortId.generate();
    const profile = `${process.env.CLIENT_URL}/profile/${username}`;

    const newUser = new User({ name, email, password, username, profile });
    newUser.save((err, success) => {
      if (err) return res.status(400).json({ error: err });

      res.json({ message: 'Signup success! Please signin ' });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err || !user)
      return res
        .status(400)
        .json({ error: 'User with that email does not exist! Please Signup' });

    if (!user.authenticate(password))
      return res
        .status(400)
        .json({ error: 'Email and password do not match.' });

    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, { expiresIn: '1d' });
    const { _id, username, name, email, role } = user;
    return res.json({
      token,
      user: { _id, username, name, email, role },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Signout success' });
};
