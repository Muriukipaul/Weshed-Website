import { transporter } from "./emailConfigjs";
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
};
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
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	const weshedReceive = [{ email }];

	try {
		const response = await transporter.sendMail({
			from: sender,
			to: weshedReceive,
			subject: "Reset your password",
			text: "Rset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
		
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	const weshedReceive = [{ email }];

	try {
		const response = await transporter.sendMail({
			from: sender,
			to: weshedReceive,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
		
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
