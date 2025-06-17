const utilities = require("../utilities/"); // ton fichier util
const invModel = require("../models/inventory-model"); // ton modèle

const buildManagementView = async (req, res) => {
  const nav = await utilities.getNav();
  req.flash("notice", null); // efface les messages flash après affichage
  res.render("inventory/management", {
    title: "Inventory Management",
    nav,
    errors: null,
  });
};

const buildAddClassification = async (req, res) => {
  const nav = await utilities.getNav();
  res.render("inventory/add-classification", {
    title: "Add New Classification",
    nav,
    errors: null,
  });
};

const addClassification = async (req, res) => {
  const { classification_name } = req.body;
  // logique d'insertion ici
  res.redirect("/inv");
};

const buildAddInventory = async (req, res) => {
  const nav = await utilities.getNav();
  const classificationSelect = await utilities.buildClassificationList();
  res.render("inventory/add-inventory", {
    title: "Add New Inventory",
    nav,
    classificationSelect,
    errors: null,
  });
};

const addInventory = async (req, res) => {
  const data = req.body;
  // logique d'insertion ici
  res.redirect("/inv");
};

module.exports = {
  buildManagementView,
  buildAddClassification,
  addClassification,
  buildAddInventory,
  addInventory,
};