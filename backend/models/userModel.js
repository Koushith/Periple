import mongoose from 'mongoose';

let socialSchema = mongoose.Schema({
  platform: {
    type: String,
  },
  link: {
    type: String,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an Email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a Password'],
    },
    occupation: {
      type: String,
    },
    bio: {
      type: String,
    },
    socialLink: [
      // {
      //   platform: { type: String },
      //   link: { type: String },
      // },
      socialSchema,
    ],
    files: [
      {
        type: String,
        // add ref later
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
