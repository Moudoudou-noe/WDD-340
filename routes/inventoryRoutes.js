// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const invController = require('../controllers/inventoryController');

// Route pour voir le détail du véhicule
router.get('/detail/:invId', invController.buildVehicleDetail);

module.exports = router;