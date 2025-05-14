const express = require('express');
const router = express.Router();

// Route GET pour la page d'accueil, rend index.ejs depuis le dossier views
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;