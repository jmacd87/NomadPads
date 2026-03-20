import mongoose from 'mongoose';

let connected = false;

const connectDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error(
        'MONGODB_URI is not defined in your environment variables.'
      );
    }

    console.log('Connecting to MongoDB with URI:', process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
