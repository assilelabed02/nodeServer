const { Product } = require("../models/Product.model");

const create = (req, res) => {
  const post = { title: "blue short", price: 10 };

  Product.create(post);
};

module.exports = { create };
