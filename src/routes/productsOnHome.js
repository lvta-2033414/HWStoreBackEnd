const express = require("express");
const router = express.Router();

const { getProductsOnHome } = require("../controllers/productsOnHome");

router.route("/").get(getProductsOnHome);

module.exports = router;
