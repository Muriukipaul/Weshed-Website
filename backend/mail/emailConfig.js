import nodemailer from 'nodemailer';
import "../config.js";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: global.email,
    pass: global.pass_key,
  },
});

const sender = {
	email: global.email,
	name: global.name,
};

export { transporter, sender };
