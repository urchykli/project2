const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Volunteer = new Schema({
	title: String,
	location: String,
	description: String,
	createdAt: {
    type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model("Volunteer", Volunteer);