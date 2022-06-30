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
      ['name', 'price', 'discount price'],
    );

    newProductList = await NewProductsModel.find({}).populate('product', [
      'name',
      'price',
    ]);

    bestSellProductList = await BestSellProductsModel.find({}).populate(
      'product',
      ['name', 'price'],
    );

    return { discountProductList, bestSellProductList, newProductList };
  } catch (error) {
    return { msg: error };
  }
};
