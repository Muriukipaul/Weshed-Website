import nodemailer from 'nodemailer';
import "../config.js";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: global.email,
    pass: global.pass_key,
  },
});


  