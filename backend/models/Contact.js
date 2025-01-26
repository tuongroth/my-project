const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
