const Pet = require("../models/Pet");
const Volunteer = require("../models/Volunteer")

module.exports = {
  index: (req, res) => {
    Pet.find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .then(pets => {
				Volunteer.find({})
        .sort({ createdAt: -1 })
        .limit(20)
        .then(volunteers => {
        res.render("app/index", { pets, volunteers });
      });
    
      })
  }
};