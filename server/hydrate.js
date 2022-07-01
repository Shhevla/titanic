import mongoose from "mongoose";
import dotenv from "dotenv";

import {
    UserModel
} from "./models/User.js";
import { users } from "./mock/user-node.js";

dotenv.config();

const {
    APP_LOCALHOST: hostname,
    APP_PORT: port,
    APP_ADDRESS_MONGOOSE,
    APP_COLLECTION_MONGOOSE,
} = process.env;

mongoose.connect(
    `mongodb://${APP_ADDRESS_MONGOOSE}/${APP_COLLECTION_MONGOOSE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

export const init = async() => {
    try {
        await UserModel.deleteMany();
        const res = await UserModel.insertMany(users);
        return res;
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
};

init().then(console.log);