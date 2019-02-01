const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

module.exports = mongoose.model("Comment", Comment);