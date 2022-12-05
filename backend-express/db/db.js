import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()

try{
    const url = process.env.MONGO_DB_HOST;
    const client = await mongoose.connect(url);
    console.log(`Database connected with host ${client.connection.host}`)
}catch(err){
    console.log(err.message)
}
const db = mongoose.connection;
export default db; 