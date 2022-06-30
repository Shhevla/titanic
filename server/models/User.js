import mongoose from "mongoose";

export const UserShema = new mongoose.Schema({
    name: String,
    password: String
});

export const UserModel = mongoose.model("users", UserShema);