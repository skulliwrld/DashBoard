import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () =>{
    mongoose.set("strictQuery", true);

    if(isConnected){
        console.log("MONGODB is connected already");
        return
    }

    try {
        await mongoose.connect(process.env.MONOGO_DB_URL,{
            dbName:"Dashboard"
        })

        isConnected = true
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error.message)
    }
}