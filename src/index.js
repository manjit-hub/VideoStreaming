import connectDB from "./db/index.js";
import {app} from "./app.js"
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});

// To connect MongoDb
connectDB()
.then(() =>{
    app.on("Error in app !!", (error) =>{
        console.log(error.message);
        throw error;
    })

    const port = process.env.PORT || 8000;
    app.listen(port, () =>{
        console.log(`Server is running at port : ${port} !!` )
    })
})
.catch((error) =>{
    console.log("DB Connetion Failed !! ", error);
})