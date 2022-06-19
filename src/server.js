const express = require('express');
// const fs = require('fs');
// const https = require('https');
const connectDB = require('./db/connect');
const productsOnHome = require('./routes/productsOnHome');
const productsList = require('./routes/productList');
const registerUser = require('./routes/register.js');
const login = require('./routes/login.js');
const cart = require('./routes/cart.js');

require('dotenv').config();
const cors = require('cors');

// const hostname = 'hwstoreapi.thienan.name.vn';
// const httpsOptions = {
// cert: fs.readFileSync('./abc.txt'),
// ca: fs.readFileSync('./hwstorecabu'),
// key: fs.readFileSync('./wstorekeyy'),
// };
// const text = fs.readFileSync('./ssl/abc.txt', 'utf-8');
// console.log(text);

const app = express();
// const httpsServer = https.createServer(httpsOptions, app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productsonhome', productsOnHome);
app.use('/api/productslist', productsList);
app.use('/api/register', registerUser);
app.use('/api/login', login);
app.use('/api/reviewcart', cart);
app.use('/api/addtocart', cart);
app.use('/api/changequantity', cart);
app.use('/api/deleteproduct', cart);

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
