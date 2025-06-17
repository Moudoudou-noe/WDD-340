// utilities/index.js
exports.getNav = async function () {
  // Exemple : tu peux construire la nav à partir des classifications
  const invModel = require("../models/inventory-model");
  const data = await invModel.getClassifications();
  let nav = "<ul>";
  data.rows.forEach(row => {
    nav += `<li><a href="/inv/classification/${row.classification_id}">${row.classification_name}</a></li>`;
  });
  nav += "</ul>";
  return nav;
};