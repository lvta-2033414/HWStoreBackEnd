const { getAll, getProductOnCategory } = require('../services');
const getProductsOnHome = async (req, res) => {
  const productsOnHome = await getAll();
  if (productsOnHome.hasOwnProperty('msg')) {
    res.status(500).json(productsOnHome);
  }
  res.json(productsOnHome);
  res.end();
};

const getProductList = async (req, res) => {
  const productList = await getProductOnCategory(req.params.category);
  if (productList.hasOwnProperty('msg')) {
    res.status(500).json(productList);
  }
  res.json(productList);
  res.end();
};

module.exports = { getProductsOnHome, getProductList };
