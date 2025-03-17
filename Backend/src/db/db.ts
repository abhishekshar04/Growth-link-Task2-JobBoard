import mongoose from "mongoose";
const DB_NAME = "job-board";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`\n Mongo DB connected !! DB HOST ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("Mongodb connection error",error);
        process.exit(1);
    }
}

export default connectDB;