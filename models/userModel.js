const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      minLength: [2, 'First name must be at least 2 characters long'],
      maxLength: [32, 'First name cannot be longer than 32 characters'],
      validate: {
        validator: (value) => /^[a-zA-Z]+$/.test(value),
        message: 'First name can only contain letters (a-zA-Z)',
      },
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      minLength: [2, 'Last name must be at least 2 characters long'],
      maxLength: [32, 'Last name cannot be longer than 32 characters'],
      validate: {
        validator: (value) => /^[a-zA-Z]+$/.test(value),
        message: 'Last name can only contain letters (a-zA-Z)',
      },
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
      validate: {
        validator: (value) => /^[a-zA-Z\s]+$/.test(value),
        message: 'City can only contain letters (a-zA-Z) and spaces',
      },
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
      validate: {
        validator: (value) => /^[a-zA-Z\s]+$/.test(value),
        message: 'State can only contain letters and spaces',
      },
    },
    zipCode: {
      type: String,
      required: [true, 'Zip code is required'],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      validate: [validator.isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
      validate: [
        validator.isStrongPassword,
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.',
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
