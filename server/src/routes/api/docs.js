const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Docs
router.get('/', (req, res) => {
    res.send('test');
});

module.exports = router;