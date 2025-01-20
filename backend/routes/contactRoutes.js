const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Các endpoint CRUD
router.get('/', async (req, res) => { /*...*/ });
router.post('/', async (req, res) => { /*...*/ });
router.put('/:id', async (req, res) => { /*...*/ });
router.delete('/:id', async (req, res) => { /*...*/ });

module.exports = router;
