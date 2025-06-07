// controllers/inventoryController.js
const invModel = require('../models/inventory-model');
const util = require('../utilities/');

async function buildVehicleDetail(req, res, next) {
  try {
    const invId = req.params.invId;
    const vehicle = await invModel.getVehicleById(invId);
    if (!vehicle) return next(); // 404

    const nav = await util.getNav();
    const vehicleHTML = util.buildVehicleHTML(vehicle);
    res.render('inventory/detail', {
      title: `${vehicle.inv_make} ${vehicle.inv_model}`,
      nav,
      vehicleHTML,
    });
  } catch (error) {
    next(error); // pass to 500 handler
  }
}

module.exports = { buildVehicleDetail };