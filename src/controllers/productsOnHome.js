const {
  NewProductsModel,
  BestSellProductsModel,
  DiscountProductsModel,
} = require("../models/productsOnHome");

const getProductsOnHome = async (req, res) => {
  let bestSellProductList, discountProductList, newProductList;
  try {
    discountProductList = await DiscountProductsModel.find({});

    newProductList = await NewProductsModel.find({});

    bestSellProductList = await BestSellProductsModel.find({});

    res.json({ discountProductList, bestSellProductList, newProductList });
    res.end();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getProductsOnHome };
