const express = require('express');
const { searchShip } = require('../controllers/ships.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/search', protect, searchShip);

module.exports = router;