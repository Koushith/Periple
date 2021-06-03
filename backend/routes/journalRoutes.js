import express from 'express';
import {
  getAlljournal,
  getSingleJournal,
} from '../controllers/journalController.js';
import { Protected } from '../middlewares/authMiddlware.js';

const router = express.Router();

// @desc Fetch all posts
//  @route GET /api/posts
//  @access Private

router.get('/', Protected, getAlljournal);

// @desc Fetch single post
//  @route GET /api/posts/:id
//  @access Private

router.get('/:id', getSingleJournal);

export default router;
