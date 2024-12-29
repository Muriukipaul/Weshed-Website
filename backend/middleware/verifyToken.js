import jwt from "jsonwebtoken";
import "../config.js";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized 😡" });
	try {
		const decoded = jwt.verify(token, global.jwt_secret);

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized confirm creds" });

		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.log("Error in verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};
