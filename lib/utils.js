import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Email sender function
export async function sendEmail({ to, subject, htmlFilePath, dynamicValues }) {
  try {
    if (!to || !subject) {
      throw new Error("Email fields [to, subject, text] are required");
    }

    console.log(to, subject, htmlFilePath, dynamicValues);
    if (!htmlFilePath) {
      htmlFilePath = path.resolve("./public/templates/emailTemplate.html");
    }

    if (!fs.existsSync(htmlFilePath)) {
      throw new Error("HTML template file not found");
    }

    if (!dynamicValues) {
      dynamicValues = { ctaLink: "https://example.com/verify-email" };
    }
    // Read the HTML template file
    let htmlTemplate = fs.readFileSync(path.resolve(htmlFilePath), "utf-8");

    // If you have dynamic values, replace placeholders in the template
    if (dynamicValues) {
      Object.keys(dynamicValues).forEach((key) => {
        const regex = new RegExp(`\\[${key}\\]`, "g");
        htmlTemplate = htmlTemplate.replace(regex, dynamicValues[key]);
      });
    }

    // Configure the transporter with your Gmail SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Secure port
      secure: true, // Use SSL
      auth: {
        user: process.env.EmailUser, // Your Gmail address
        pass: process.env.EmailPassword, // Your App Password
      },
    });

    // Email options
    const mailOptions = {
      from: `"NetHub" <${process.env.EmailUser}>`, // Sender name and address
      to, // Recipient
      subject, // Subject of the email
      // text, // Plain text content
      html: htmlTemplate, // HTML content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
