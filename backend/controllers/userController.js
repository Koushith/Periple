import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';

/**
 *
@desc    Register new user
@route   POST /api/users/
@access  Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;

  console.log('social', req.body);

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all Fields');
  }

  // check if user exists

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user

  const user = await User.create({
    name,
    email,
    phone,
    socialLink: req.body.socialLink,
    password: hashedPassword,
  });

  // after creating- return the response with jwt token- this token will be used to access protected routes

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      socialLink: user.socialLink,
      phone: user.phone,
      token: generateToken(user._id),
    });
  }

  console.log('user creates', user);
});

// login/authenficate

// profile
