const User = require("../models/User");
const Pet  = require("../models/Pet");
const Volunteer  = require("../models/Volunteer");
// const Comment = require("../models/Comment")

User.find({}).remove(() => {
  Pet.find({}).remove(() => {
		Pet.create({
			name: "Murphy",
			url: "https://www.petfinder.com/cat/chestnut-43886366/dc/washington/humane-rescue-alliance-dc03/",
			location: "Washington, DC",
			age: 2,
			animalType: "Cat",
			breed: "Domestic Short Hair",
			gender: "male",
			description: "cuuuuuuuuuuuuuute!",
		}),
		Volunteer.create({
			title: "Pet Cuddler",
			location: "Adams Morgan, Washington, DC",
			descritpion: "Best job ever!"
		})
	})
})
