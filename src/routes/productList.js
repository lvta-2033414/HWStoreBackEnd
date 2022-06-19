const express = require("express");
const router = express.Router();

const { getProductList } = require("../controllers/productList");

router.route("/:category").get(getProductList);

module.exports = router;
