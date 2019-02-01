const User = require("../models/User");
const Pet = require("../models/Pet");

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "pet",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("user/show", { user });
      });
  },
  signup: (req, res) => {
    res.render("user/new");
  },
  createSignup: (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password
    }).then(user => {
      res.redirect(`/user/${user._id}`);
    });
  }
};