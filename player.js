const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  position: String,
  age: Number,
  height: Number,
  club: String,
  stats: {
    goals: Number,
    assists: Number,
    matches: Number
  },
  verified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Player", playerSchema);