const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneno: { type: String },
  type:{type:String},
  resetToken:String,
  expireToken:Date
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
