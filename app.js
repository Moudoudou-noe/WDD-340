// app.js
const express = require('express');
const app = express();
const baseRoutes = require('./routes/baseRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', baseRoutes);
app.use('/inv', inventoryRoutes);

// Route qui déclenche une erreur 500
app.get('/trigger-error', (req, res, next) => {
  throw new Error('Intentional 500 error');
});

// 404
app.use((req, res, next) => {
  res.status(404).render('errors/404', { title: '404 Not Found' });
});

// 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('errors/500', { title: '500 Server Error' });
});

module.exports = app;