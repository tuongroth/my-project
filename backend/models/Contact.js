const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
