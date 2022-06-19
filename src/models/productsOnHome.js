const mongoose = require("mongoose");
const { Schema } = mongoose;

const DiscountProductsSchema = new Schema(
  {},
  { collection: "discountProducts" }
);
const DiscountProductsModel = mongoose.model(
  "discountProducts",
  DiscountProductsSchema
);

const BestSellProductsSchema = new Schema(
  {},
  { collection: "bestSellProducts" }
);
const BestSellProductsModel = mongoose.model(
  "bestSellProducts",
  BestSellProductsSchema
);

const NewProductsSchema = new Schema({}, { collection: "newProducts" });
const NewProductsModel = mongoose.model("newProducts", NewProductsSchema);

module.exports = {
  DiscountProductsModel,
  BestSellProductsModel,
  NewProductsModel,
};
