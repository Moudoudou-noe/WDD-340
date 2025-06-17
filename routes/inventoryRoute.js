const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

// Management View
router.get("/", inventoryController.buildManagementView);

// Add Classification View
router.get("/add-classification", inventoryController.buildAddClassification);
router.post("/add-classification", inventoryController.addClassification);

// Add Inventory View
router.get("/add-inventory", inventoryController.buildAddInventory);
router.post("/add-inventory", inventoryController.addInventory);

module.exports = router;