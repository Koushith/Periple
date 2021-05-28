import express from 'express';

import {
  getProfile,
  registerUser,
  getAllUsers,
  authUser,
} from '../controllers/userController.js';
import { Protected } from '../middlewares/authMiddlware.js';

const router = express.Router();

// @desc   Create new user
// @route   POST /api/users/
// @access  Public

router.route('/').post(registerUser).get(getAllUsers);
router.post('/login', authUser);
router.route('/profile').get(Protected, getProfile);

export default router;
