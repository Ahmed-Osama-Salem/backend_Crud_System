const mongoose = require("mongoose");

const tableOneSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  allText: {
    type: Object,
    required: true,
  },
  text: {
    type: Array,
    required: true,
  },
  textMosad: {
    type: Array,
    required: true,
  },
});

const ConstructTable = mongoose.model("ConstructTable", tableOneSchema);

module.exports = ConstructTable;
