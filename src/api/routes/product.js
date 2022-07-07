const express = require('express');
const router = express.Router();

const {
  getProductsOnHome,
  getProductList,
  getOneProduct,
} = require('../controllers/product');

router.route('/onhome').get(getProductsOnHome);
router.route('/:category').get(getProductList);
router.route('/:category/:id').get(getOneProduct);

module.exports = router;
