const mongoose = require("mongoose");

const tableFiveSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  id: {
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

const NewConstructTable = mongoose.model("NewConstructTable", tableFiveSchema);

module.exports = NewConstructTable;
