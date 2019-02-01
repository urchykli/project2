const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
		firstName: String,
		lastName: String,
		email: String,
		password: String,
		pets: [
			{type: Schema.Types.ObjectId,
			ref: "Pet"}
		],
		comments: [
			{type: Schema.Types.ObjectId,
			ref: "Comment"}
		]
})

module.exports = mongoose.model("User", User);