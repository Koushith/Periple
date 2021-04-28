import asyncHandler from 'express-async-handler';

// @desc   Create new user
// @route   POST /api/users/
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    name,
    email,
    password,
  });
  console.log(req.body);
});

const getProfile = asyncHandler(async (req, res) => {
  res.send('success');
});

export { getProfile, registerUser };
