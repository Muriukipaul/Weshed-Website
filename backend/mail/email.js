import { transporter } from "./Email.confiq.js";
import { Verification_Email_Template, Welcome_Email_Template, PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE} from "./template.js";


export const sendVerificationEamil=async(email,verificationCode)=>{
	const weshedReceive = [{ email }];
    try {
     const response=   await transporter.sendMail({
            from: '"Weshed Inc" <myemail@gmail.com>',

            to: weshedReceive, // list of receivers
            subject: "Verify your Email", // Subject line
            text: "Verify your Email", // plain text body
            html: Verification_Email_Template.replace("{verificationCode}",verificationCode)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
}
export const senWelcomeEmail=async(email,name)=>{
	const weshedReceive = [{ email }];
    try {
     const response=   await transporter.sendMail({
            from: '"Weshed Inc" <myemail@gmail.com>',

            to: weshedReceive, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",name)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
}
