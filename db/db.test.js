const { connect, disconnect, findUser, saveUser } = require('./db');
const User = require('../models/userModel');
const mongoose = require('mongoose');

jest.mock('./db');

beforeAll(async () => {
  return await connect();
});

describe('User test suite', () => {
  test('As a user i want to save a user to the database', async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: 'sam',
      lastName: 'roy',
      address: '123 road',
      city: 'mumbai',
      state: 'maharashtra',
      zipCode: '123456',
      email: 'sam@gmail.com',
      password: '123password',
    });

    const user = await saveUser(newUser);
    expect(user).toMatchObject({
      firstName: 'sam',
      lastName: 'roy',
      address: '123 road',
      city: 'mumbai',
      state: 'maharashtra',
      zipCode: '123456',
      email: 'sam@gmail.com',
    });
  });

  test('As a user i want to find a user by any property', async () => {
    const obj = { firstName: 'sam' };

    const user = await findUser(obj);
    expect(user).toMatchObject({
      firstName: 'sam',
      lastName: 'roy',
      address: '123 road',
      city: 'mumbai',
      state: 'maharashtra',
      zipCode: '123456',
      email: 'sam@gmail.com',
      password: '123password',
    });
  });
});

afterAll(async () => {
  return await disconnect();
});
