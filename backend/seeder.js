import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userModel.js';
import connectDB from './config/db.js';
import userData from './data/userData.js';
import posts from './data/posts.js';
import Posts from './models/postModel.js';

connectDB();

const importData = async () => {
  try {
    // delete if any existing data found
    await User.deleteMany();

    await User.insertMany(userData);

    await Posts.insertMany(posts);

    console.log('Data imported!!');

    process.exit();
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await User.deleteMany();
    await Posts.deleteMany();
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}
