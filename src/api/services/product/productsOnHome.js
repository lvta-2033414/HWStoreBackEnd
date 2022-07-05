const {
  NewProductsModel,
  BestSellProductsModel,
  DiscountProductsModel,
} = require('../../models/productsOnHome');

module.exports = async () => {
  let bestSellProductList, discountProductList, newProductList;
  try {
    discountProductList = await DiscountProductsModel.find({}).populate(
      'product',
      ['name', 'price', 'discount price', 'img'],
    );
  } catch (error) {
    discountProductList = { msg: error };
    console.log(error);
  }
  try {
    newProductList = await NewProductsModel.find({}).populate('product', [
      'name',
      'price',
      'discount price',
      'img',
    ]);
  } catch (error) {
    newProductList = { msg: error };
  }
  try {
    bestSellProductList = await BestSellProductsModel.find({}).populate(
      'product',
      ['name', 'price', 'discount price', 'img'],
    );
  } catch (error) {
    bestSellProductList = { msg: error };
  }
  return { discountProductList, bestSellProductList, newProductList };
};
