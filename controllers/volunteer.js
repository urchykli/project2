const Volunteer = require("../models/Volunteer");

module.exports = {
  show: (req, res) => {
    Volunteer.findOne({ _id: req.params.id }).then(volunteer => {
      res.render("volunteer/show", volunteer);
      // });
    });
  },
  create: (req, res) => {
    Volunteer.create({
      title: req.body.volunteer.title,
      location: req.body.volunteer.location,
      description: req.body.volunteer.description
    }).then(volunteer => {
      res.redirect(`volunteer/${volunteer._id}`);
    });
  },
  new: (req, res) => {
    res.render("volunteer/new");
  },
  delete: (req, res) => {
    Volunteer.findOneAndRemove({ _id: req.params.id }).then(volunteer => {
      res.redirect("/");
    });
  },
};
