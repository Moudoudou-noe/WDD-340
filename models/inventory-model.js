// models/inventory-model.js
const pool = require('../database/'); // votre pool PostgreSQL

async function getVehicleById(inv_id) {
  try {
    const sql = 'SELECT * FROM public.inventory WHERE inv_id = $1';
    const data = await pool.query(sql, [inv_id]);
    return data.rows[0];
  } catch (error) {
    throw new Error('Database Error: ' + error.message);
  }
}

module.exports = {
  getVehicleById,
  // autres fonctions...
};