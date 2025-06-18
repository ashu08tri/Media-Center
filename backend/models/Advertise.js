const mongoose = require("mongoose");

const advertiseSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  details: String,
  status: {
    type: String,
    default: "requested", // can be "requested" or "approved"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Advertise", advertiseSchema);
