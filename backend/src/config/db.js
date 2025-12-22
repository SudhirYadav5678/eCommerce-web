import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(ENV.DB_URL);
        console.log("Connection is establised");

    } catch (error) {
        console.log("Error while db connectin: ", error);
        process.exit(1);
    }
}