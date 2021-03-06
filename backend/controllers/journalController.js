import express from 'express';
import asyncHandler from 'express-async-handler';
import Journals from '../models/journalModel.js';

// @desc Fetch all posts
//  @route GET /api/posts
//  @access Private

const getAlljournal = asyncHandler(async (req, res) => {
  const allPosts = await Journals.find({});
  res.json(allPosts);
});

// @desc Fetch single post
//  @route GET /api/posts/:id
//  @access Private

const getSingleJournal = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const singlePost = await Journals.findById(postId);

  if (singlePost) {
    res.json(singlePost);
  } else {
    res.status(404).json({ message: 'Post Not found' });
  }
});

export { getAlljournal, getSingleJournal };
