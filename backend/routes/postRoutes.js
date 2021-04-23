import express from 'express';
import asyncHandler from 'express-async-handler';
import Posts from '../models/postModel.js';

const router = express.Router();

// @desc Fetch all posts
//  @route GET /api/posts
//  @access Private

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allPosts = await Posts.find({});
    res.json(allPosts);
  })
);

// @desc Fetch single post
//  @route GET /api/posts/:id
//  @access Private

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const singlePost = await Posts.findById(postId);

    if (singlePost) {
      res.json(singlePost);
    } else {
      res.status(404).json({ message: 'Post Not found' });
    }
  })
);

export default router;
