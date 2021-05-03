import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
  console.log('gen id', id);
  return jwt.sign({ id }, 'abc12345', {
    expiresIn: '30d',
  });
};
