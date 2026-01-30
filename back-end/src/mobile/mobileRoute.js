const express = require('express');
const phone = require('./mobileModel');
const { postPhone, getAllPhone, getPhone, updatePhone, deletePhone } = require('./mobileController');
const router = express.Router();

// Post route to add a new mobile phone series
router.post('/add-phone', postPhone);

// Get all books from DB
router.get('/', getAllPhone)

// Get a Book from DB
router.get("/:id", getPhone)

// Update a Book in DB
router.put("/edit/:id", updatePhone)

// Delete a Book from DB
router.delete("/delete/:id",deletePhone)

module.exports = router;