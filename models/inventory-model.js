const pool = require('../database')

exports.addClassification = async (name) => {
  try {
    const sql = 'INSERT INTO classification (classification_name) VALUES ($1)'
    const data = await pool.query(sql, [name])
    return data.rowCount
  } catch (err) {
    console.error(err)
    return null
  }
}

exports.getClassifications = async () => {
  return pool.query('SELECT * FROM classification ORDER BY classification_name')
}

exports.addInventory = async (data) => {
  try {
    const sql = `
      INSERT INTO inventory (inv_make, inv_model, inv_year, inv_description,
        inv_image, inv_thumbnail, inv_price, inv_miles, inv_color, classification_id)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`
    const params = [
      data.inv_make, data.inv_model, data.inv_year, data.inv_description,
      data.inv_image, data.inv_thumbnail, data.inv_price, data.inv_miles,
      data.inv_color, data.classification_id
    ]
    return (await pool.query(sql, params)).rowCount
  } catch (err) {
    console.error(err)
    return null
  }
}