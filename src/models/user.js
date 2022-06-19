const mongoose = require('mongoose');
const { Schema } = mongoose;

const cart = new Schema({
  productID: { type: String, default: '' },
  category: { type: String, default: '' },
  brand: { type: String, default: '' },
  quantity: { type: Number, default: 1 },
});

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, default: '' },
    email: { type: String, default: '' },
    address: { type: String, default: '' },
    cart: {
      type: [cart],
      default: [],
    },
  },
  { collection: 'users' },
);
const UserModel = mongoose.model('users', UserSchema);

module.exports = {
  UserModel,
  cart,
};
