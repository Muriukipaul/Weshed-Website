
import mongoose from "mongoose";
import "../config.js"

export const connectDB = async () => {
	try {
		console.log("mongo_uri: ", global.db);
		const conn = await mongoose.connect(global.db);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1);
	}
};
