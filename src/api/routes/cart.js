const express = require('express');
const router = express.Router();

const {
  addToCart,
  reviewCart,
  deleteProduct,
  changeQuantity,
} = require('../controllers/cart.js');
const { verifyToken } = require('../middlewares/verifyToken.js');

router.route('/add').post(verifyToken, addToCart);
router.route('/review').get(verifyToken, reviewCart);
router.route('/changequantity').post(verifyToken, changeQuantity);
router.route('/deleteproduct/:productid').delete(verifyToken, deleteProduct);
module.exports = router;
