import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

// DATA received in json form: set limit
app.use(express.json({
    limit: '16kb'
}));
// DATA received in URL form:
app.use(express.urlencoded({
    extended : true, 
    limit: "16kb"
}));
// to store some data inside 'public' folder
app.use(express.static("public")) 

// to give access of cookies to server
app.use(cookieParser());

export {app};