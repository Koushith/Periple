import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';

// @desc   Create new user
// @route   POST /api/users/
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);
  const checkUserExist = await User.findOne({ email });

  if (checkUserExist) {
    console.log('user Exists');
    res.status(200).json({
      status: 'user exists',
    });
  } else {
    res.status(404).json({
      status: 'user not',
    });
  }
});

// @desc   Create new user
// @route   POST /api/users/profile
// @access  Private

const getProfile = asyncHandler(async (req, res) => {
  res.send('success');
});

export { getProfile, registerUser };
