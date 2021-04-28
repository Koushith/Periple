import express from 'express';

import { getProfile, registerUser } from '../controllers/userController.js';

const router = express.Router();

// @desc   Create new user
// @route   POST /api/users/
// @access  Public

router.post('/', registerUser);

export default router;
