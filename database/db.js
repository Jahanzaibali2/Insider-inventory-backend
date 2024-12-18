import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connection_instance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE_NAME}`
        );
        console.log(
            `\n MongoDB Connected!! DB Host ${connection_instance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB connection FAILED: ", error);
        process.exit(1); // process ko exit karne k lye exit code yahan pe 1 use kara hai
    }
};

export default connectDB;
