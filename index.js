import dotenv from "dotenv";
import express from "express";
const app = express()
import connectDB from "./database/db.js";

dotenv.config({
    path: "./.env",
});

// Database connection
connectDB()
    .then(() => {
        app.on("Error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at port: http://localhost:${process.env.PORT}/`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed !!", err);
    });
