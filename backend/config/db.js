import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Conntected: ${con.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

export default connectDB;
