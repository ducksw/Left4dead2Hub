import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("CONNECT DATABASE")
  } catch (error) {
    console.log("FAIL DATABASE", error);
  }
}

export default connectDB;
