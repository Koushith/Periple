import bcrypt from 'bcryptjs';

const userData = {
  name: 'Koushith',
  email: 'koushith97@gmail.com',
  password: bcrypt.hashSync('12345', 10),
};

export default userData;
