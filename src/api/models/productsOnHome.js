const mongoose = require('mongoose');
const { Schema } = mongoose;

const DiscountProductsSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'category',
    },
    category: { type: String, required: true },
  },
  { collection: 'discountProducts' },
);
const DiscountProductsModel = mongoose.model(
  'discountProducts',
  DiscountProductsSchema,
);

const BestSellProductsSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'category',
    },
    category: { type: String, required: true },
  },
  { collection: 'bestSellProducts' },
);
const BestSellProductsModel = mongoose.model(
  'bestSellProducts',
  BestSellProductsSchema,
);

const NewProductsSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'category',
    },
    category: { type: String, required: true },
  },
  { collection: 'newProducts' },
);
const NewProductsModel = mongoose.model('newProducts', NewProductsSchema);

module.exports = {
  DiscountProductsModel,
  BestSellProductsModel,
  NewProductsModel,
};
