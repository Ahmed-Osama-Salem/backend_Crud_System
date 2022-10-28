const mongoose = require("mongoose");

const tableThreeSchema = mongoose.Schema({
  dateNow: {
    type: String,
    required: true,
  },
  timeNow: {
    type: String,
    required: true,
  },
  formData: {
    type: Object,
    required: true,
  },
  supplyInputs: {
    type: Array,
    required: true,
  },
});

const PrimTabledb = mongoose.model("PrimTabledb", tableThreeSchema);

module.exports = PrimTabledb;
