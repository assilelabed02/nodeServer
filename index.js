// require express
const express = require("express");
// require
const mongoose = require("mongoose");
// require dotenv
require('dotenv').config();

// define app
const app = express();

// middlewaire
app.use(express.json());

// database connection
mongoose.connect('');

// route
// rond point
app.use('/api/product', require('./router/product.router'));
app.use('/api/user',require('./router/user.router'))

// serve the application
app.listen(process.env.PORT, () => {
  console.log(`Server running at port: ***${process.env.PORT}***`);
});
