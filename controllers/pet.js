const Pet = require("../models/Pet");
const User = require("../models/User");
const Comment = require("../models/Comment");

module.exports = {
  show: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      // .populate("user")
      .then(pet => {
        // Comment.populate(pet.comments, { path: "pet" }, function(err, comments) {
        //   pet.comments = comments;
        // console.log(pet);
        // console.log(comments);
        res.render("pet/show", pet);
        // });
      });
  },
  create: (req, res) => {
    Pet.create({
        name: req.body.pet.name,
        url: req.body.pet.url,
        location: req.body.pet.location,
        age: req.body.pet.age,
        animalType: req.body.pet.animalType,
        breed: req.body.pet.breed,
        gender: req.body.pet.gender,
        description: req.body.pet.description,
    })
    .then(pet => {
        res.redirect(`pet/${pet._id}`)
    })
},
new: (req, res) => {
    res.render('pet/new')
},
  update: (req, res) => {
    let { description } = req.body.pet;
    Pet.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { description: description } }
    ).then((pet) => {
      res.redirect(`/pet/${pet._id}`);
    });
  },
  delete: (req, res) => {
    Pet.findOneAndRemove({ _id: req.params.id }).then(pet => {
      res.redirect("/");
    });
  },
  edit: (req, res) => {
    res.render("pet/edit", { id: req.params.id });
  }
};
