const { getAll, getProductOnCategory, getProduct } = require('../services');
const getProductsOnHome = async (req, res) => {
  const productsOnHome = await getAll();
  if (productsOnHome.hasOwnProperty('msg')) {
    res.status(500).json(productsOnHome);
    return;
  }
  res.json(productsOnHome);
  res.end();
};

const getProductList = async (req, res) => {
  const productList = await getProductOnCategory(req.params.category);
  if (productList.hasOwnProperty('msg')) {
    res.status(500).json(productList);
    return;
  }
  res.json(productList);
  res.end();
};

const getOneProduct = async (req, res) => {
  let product = await getProduct(req.params.category, req.params.id);
  if (
    product !== null
      ? product.hasOwnProperty('msg')
      : (product = { msg: 'Product not found' })
  ) {
    res.status(500).json(product);
    return;
  }
  res.json(product);
  res.end();
};

module.exports = { getProductsOnHome, getProductList, getOneProduct };
