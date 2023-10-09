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

// import mongoose from 'mongoose';

// let isConnected = false;

// export const connectToDb = async () => {
//   mongoose.set('strictQuery', true);

//   if (isConnected) {
//     console.log('Already connected to the database.');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log('MongoDB connected successfully.');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     isConnected = false;
//   }
// };
