const express = require('express');
const router = express.Router();

const { getProductsOnHome, getProductList } = require('../controllers/product');

router.route('/onhome').get(getProductsOnHome);
router.route('/:category').get(getProductList);

module.exports = router;
