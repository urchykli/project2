const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Pet = new Schema({
  name: String,
  url: String,
  location: String,
  age: Number,
  animalType: String,
  breed: String,
  gender: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Pet", Pet);