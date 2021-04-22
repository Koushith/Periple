import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: Date,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model('Posts', postSchema);

export default Posts;
