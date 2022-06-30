const { UserModel, cart } = require('../models/user.js');
const {
  CpuAmdModel,
  CpuIntelModel,
  MainboardAmdModel,
  MainboardIntelModel,
  RamModel,
  DiskModel,
  PsuModel,
  CaseModel,
  KeyboardMouseModel,
  DisplayModel,
} = require('../models/productCategory.js');

const checkUserId = async (userId) => {
  let user = await UserModel.findOne({ _id: userId });
  if (!user) {
    user = null;
    res.status(400).json({ success: false, message: 'Wrong UserID' });
    return user;
  }
  return user;
};

const reviewCart = async (req, res) => {
  try {
    let product = null;
    const cartInReview = [];
    let user = null;
    checkUserId(req.userId)
      .then((result) => {
        user = result;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    res.end();
    if (user && user.cart.length > 0) {
      for (const item of user.cart) {
        switch (item.category) {
          case 'CPU':
            if (item.brand === 'AMD') {
              product = await CpuAmdModel.findOne({
                productID: item.productID,
              });
            } else {
              product = await CpuIntelModel.findOne({
                productID: item.productID,
              });
            }
            break;
          case 'MAIN':
            if (item.brand === 'AMD') {
              product = await MainboardAmdModel.findOne({
                productID: item.productID,
              });
            } else {
              product = await MainboardIntelModel.findOne({
                productID: item.productID,
              });
            }
            break;
          case 'RAM':
            product = await RamModel.findOne({ productID: item.productID });
            break;
          case 'HDD':
            product = await DiskModel.findOne({ productID: item.productID });
            break;
          case 'PSU':
            product = await PsuModel.findOne({ productID: item.productID });
            break;
          case 'CASE':
            product = await CaseModel.findOne({ productID: item.productID });
            break;
          case 'keyboard-mouse':
            break;
          case 'display':
            break;
          default:
            cartInReview.push('Wrong category');
            continue;
        }
        if (!product) {
          cartInReview.push('Product not found');
          continue;
        }
        cartInReview.push(product);
      }
      res.status(200).json(cartInReview);
      res.end();
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: 'Product not found' });
    res.end();
  }
};

const addToCart = async (req, res) => {
  try {
    const { productID, category, brand } = req.body;
    const user = await UserModel.findOne({ _id: req.userId });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Wrong UserID' });
    } else {
      if (user.cart.length === 0) {
        user.cart.push({ productID, category, brand });
        await user.save();
      } else {
        for (const item of user.cart) {
          if (item.productID === productID) {
            item.quantity += 1;
            await user.save();
            break;
          }
        }
      }
    }

    res.status(200).json({ success: true, message: 'Added to cart' });
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};

const changeQuantity = async (req, res) => {
  try {
    const { productID, quantity } = req.body;
    const user = await UserModel.findOne({ _id: req.userId });

    let productNotFound = true;
    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].productID === productID) {
        user.cart[i].quantity = quantity;
        user
          .save()
          .then((savedDoc) => {
            console.log(savedDoc);
          })
          .catch((error) => {
            console.log(error);
          });
        productNotFound = false;
        res
          .status(200)
          .json({ success: true, message: 'Change quantity to ' + quantity });
        res.end();
        break;
      }
    }

    if (productNotFound) {
      res.status(404).json({ success: false, message: 'Wrong product ID6786' });
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.productid;
    const user = await UserModel.findOne({ _id: req.userId });

    let productDeleted = [];
    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].productID === productID) {
        productDeleted = user.cart.splice(i, 1);
        break;
      }
    }

    if (!productDeleted.length) {
      res.status(400).json({ success: false, message: 'Wrong product ID' });
      res.end();
    } else {
      await user.save();
      res
        .status(200)
        .json({ success: true, message: 'Product deleted successfully' });
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'Bad request' });
    res.end();
  }
};

module.exports = { reviewCart, addToCart, changeQuantity, deleteProduct };
