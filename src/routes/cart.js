const express = require('express');
const router = express.Router();

const {
  addToCart,
  reviewCart,
  deleteProduct,
  changeQuantity,
} = require('../controllers/cart.js');
const { verifyToken } = require('../middlewares/verifyToken.js');

router.route('/').post(verifyToken, addToCart);
router.route('/').get(verifyToken, reviewCart);
router.route('/').patch(verifyToken, changeQuantity);
router.route('/:productid').delete(verifyToken, deleteProduct);
module.exports = router;
