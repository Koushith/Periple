import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const url = 'mongodb+srv://koushith:koushith97!@cluster0.fix1onz.mongodb.net/?retryWrites=true&w=majority';
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });

    console.log(`MongoBD connected, ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error:, ${err.message}`);
    process.exit(1);
  }
};
