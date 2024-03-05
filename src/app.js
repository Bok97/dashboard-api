const express = require('express');
const adminRoutes = require('./routes/admin');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/admin/api', adminRoutes);
app.use(errorHandler);

module.exports = app;
