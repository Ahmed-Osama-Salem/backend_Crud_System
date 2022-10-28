const mongoose = require("mongoose");

const tableFourSchema = mongoose.Schema({
  dateNow: {
    type: String,
    required: true,
  },
  timeNow: {
    type: String,
    required: true,
  },
  formText: {
    type: Object,
    required: true,
  },
  storeInputs: {
    type: Array,
    required: true,
  },
});

const StoreTabledb = mongoose.model("StoreTabledb", tableFourSchema);

module.exports = StoreTabledb;
