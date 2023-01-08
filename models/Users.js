const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  job: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength:5,
  },
});

const userTable = mongoose.model("userTable", userSchema);

module.exports = userTable;
