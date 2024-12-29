import jwt from "jsonwebtoken";
import "../config.js";
export const generateTokenAndSetCookie = (res, userId) => {
	const token = jwt.sign({ userId }, global.jwt_secret, {
		expiresIn: "7d",
	});

	res.cookie("token", token, {
		httpOnly: true,
		secure: global.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	return token;
};
