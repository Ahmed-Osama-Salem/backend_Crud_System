const mongoose = require("mongoose");

const tableTwoSchema = mongoose.Schema({
  dateNow: {
    type: String,
    required: true,
  },
  timeNow: {
    type: String,
    required: true,
  },
  allPayText: {
    type: Object,
    required: true,
  },
});

const PayTabledb = mongoose.model("PayTabledb", tableTwoSchema);

module.exports = PayTabledb;
