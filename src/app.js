const express = require('express');

// App
const app = express();

// Load routes
const indexRoutes = require('../routes/index-routes.js');
app.use('/', indexRoutes);

module.exports = app;