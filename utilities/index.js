// utilities/index.js
function buildVehicleHTML(vehicle) {
  const price = Number(vehicle.inv_price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const miles = Number(vehicle.inv_miles).toLocaleString();

  return `
    <div class="vehicle-detail">
      <img src="${vehicle.inv_image}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}">
      <div class="vehicle-info">
        <h2>${vehicle.inv_make} ${vehicle.inv_model} (${vehicle.inv_year})</h2>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Miles:</strong> ${miles}</p>
        <p>${vehicle.inv_description}</p>
        <p><strong>Color:</strong> ${vehicle.inv_color}</p>
      </div>
    </div>
  `;
}

module.exports = {
  buildVehicleHTML,
  // autres utilitaires...
};