require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Database connected...');
};

const disconnect = async () => {
  await mongoose.connection.close();
  console.log('Database disconnected...');
};

const saveUser = async (newUser) => {
  return await newUser.save();
};

const findUser = async (obj) => {
  return await User.findOne(obj);
};

module.exports = { connect, disconnect, findUser, saveUser };
