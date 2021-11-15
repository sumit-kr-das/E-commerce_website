import mongoose from "mongoose";
import { DB_CONNECT } from "../config";

const connection = async () => {
  try {
    await mongoose.connect(DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser:true,
    });
    console.log('DB Connected...');
  } catch (err) {
    console.log("Connection error", err);
  }
};

export default connection;