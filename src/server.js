const express = require('express');
const connectDB = require('./config/connect');

const product = require('./api/routes/product');
const user = require('./api/routes/user');
const cart = require('./api/routes/cart.js');

require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', product);
app.use('/api/user', user);
app.use('/api/cart', cart);

let port = process.env.PORT || 6996;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => console.log('Server listening on port ' + port));
  } catch (err) {
    console.log(err);
  }
};

start();
