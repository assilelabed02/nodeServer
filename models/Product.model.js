const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// create the scheama
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = model("product", productSchema);
module.exports = { Product };
