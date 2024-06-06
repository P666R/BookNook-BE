const mongoose = require('mongoose');

exports.connect = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log('Database connected...');
};
