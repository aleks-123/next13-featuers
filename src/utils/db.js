import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err; // Rethrow the error to handle it in the calling code
  }
};

export default connect;
