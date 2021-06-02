import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils/generateToken.js';

// @desc   Create new user
// @route   POST /api/users/
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const checkUserExist = await User.findOne({ email });

  if (checkUserExist) {
    res.status(400);
    throw new Error('User already exist');
  } else {
    const createUser = await User.create({
      name,
      email,
      password,
    });

    if (createUser) {
      //  status code 201 is for created
      // if user is created successfully, send the response as created alomg with token././
      res.status(201).json({
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
        token: generateToken(createUser._id),
      });
    } else {
      res.status(400); //bad request
      throw new Error('invalid user data');
    }
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,

      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc   get user profile
// @route   GET /api/users/profile
// @access  Private

const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); // this is from missleware- we ag=have set the payload in req object

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc  update
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  // get the id from decoded - loggedin user
  let user = await User.findById(req.user._id);

  if (user) {
    // set to what ever comes from form or levae it as it is.
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

export { getProfile, registerUser, getAllUsers, authUser, updateUserProfile };
