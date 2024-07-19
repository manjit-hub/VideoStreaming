import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 const connectDB = async () =>{
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        const connectionInstance = await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected and hosted on ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Error", error);
        process.exit(1);
    }
 }

 export default connectDB;