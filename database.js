import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
  try {
    /*
      [MONGO] ES PARA LA WEB EN PRODUCCION
      [LOCALHOST] ES LOCAL
    */
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
