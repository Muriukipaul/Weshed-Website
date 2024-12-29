process.on("uncaughtException", console.error);
import express from "express";
import "./config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./Database/dbConnect.js";

import authRoutes from "./routes/authRoute.js";

//dotenv.config();

const app = express();
//const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (global.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(global.port, () => {
	connectDB();
	console.log("Server is running on port: ", global.port);
});
