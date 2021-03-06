require('dotenv').config();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user');

const registerUserService = async (req) => {
  const { name, username, password, phone, email, address, cart } = req.body;
  if (!username || !password) {
    return { success: false, message: 'Missing username or password' };
  }
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      return { success: false, message: 'User already exists' };
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = new UserModel({
      name,
      username,
      password: hashedPassword,
      phone,
      email,
      address,
      cart,
    });
    await newUser.save();

    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET_KEY,
    );

    return {
      success: true,
      message: 'User created successfully',
      accessToken: accessToken,
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Internal Server Error' };
  }
};

const loginService = async (req) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return { success: false, message: 'Missing username or password' };
  }
  try {
    const user = await UserModel.findOne({ username });
    if (!user)
      return { success: false, message: 'Incorrect username or password' };
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return { success: false, message: 'Incorrect username or password' };

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET_KEY,
    );

    return {
      success: true,
      message: 'Logged in successfully',
      userId: user._id,
      accessToken: accessToken,
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Internal Server Error' };
  }
};

module.exports = { registerUserService, loginService };
