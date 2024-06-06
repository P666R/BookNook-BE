const connect = async () => {
  console.log('MongoDB mocked connection...');
};

const disconnect = async () => {
  console.log('Mocked disconnection...');
};

const findUser = async (obj) => {
  return Promise.resolve({
    firstName: 'sam',
    lastName: 'roy',
    address: '123 road',
    city: 'mumbai',
    state: 'maharashtra',
    zipCode: '123456',
    email: 'sam@gmail.com',
    password: '123password',
  });
};

const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: 'sam',
    lastName: 'roy',
    address: '123 road',
    city: 'mumbai',
    state: 'maharashtra',
    zipCode: '123456',
    email: 'sam@gmail.com',
    password: '123password',
  });
};

module.exports = { connect, disconnect, findUser, saveUser };
