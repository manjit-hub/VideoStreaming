import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});

// To connect MongoDb
connectDB();