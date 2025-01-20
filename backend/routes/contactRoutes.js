const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch contacts' });
  }
});

// POST add a new contact
router.post('/', async (req, res) => {
  const { name, phone, email, address } = req.body;
  try {
    const newContact = new Contact({ name, phone, email, address });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: 'Unable to add contact' });
  }
});

// PUT update a contact
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(updatedContact);  
  } catch (err) {
    res.status(500).json({ error: 'Unable to update contact' });
  }
});

// DELETE delete a contact
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Unable to delete contact' });
  }
});

module.exports = router;
