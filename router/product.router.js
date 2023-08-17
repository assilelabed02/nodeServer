const express = require("express");

const { create } = require("../controllers/product.controller");
const { auth } = require("../middlewares/auth.middlewares");

const router = express.Router();

router.post("/", auth, create);
router.get(":id");
router.put();
router.delete();

// get url example with params
// 127.0.0.1/api/product?id=SDFssxx789977&filter=red

// post url example with body
// 127.0.0.1/api/product

const body = {
  title: "blue jean",
  price: 50,
};
