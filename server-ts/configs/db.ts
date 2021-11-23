import mongoose from "mongoose";
import {secret} from '../configs/secret'
const uri = process.env.MONGO_URI || secret.uri


const connectDB = async (): Promise<void> => {
    try{
        await mongoose.connect(uri, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        }).then(() => {
            console.log('Mongoose Connected to MongoDB')
        })
    }catch (e) {
        console.log('Error connecting to MongoDB. Error: ' + e)
    }
}

export default connectDB