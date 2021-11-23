import {Schema} from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 7,
        max: 15
    }
}, {
    collection: 'users'
})

const User = mongoose.model("UserSchema", UserSchema)
export default User
