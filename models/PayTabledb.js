const mongoose = require("mongoose");

const tableTwoSchema = mongoose.Schema({
  
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
