import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const url =
      'mongodb+srv://koushith:koushith97!@cluster0.mvgle.mongodb.net/journal?retryWrites=true&w=majority';

    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoBD connected, ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error:, ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
