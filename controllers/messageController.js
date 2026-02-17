const transporter = require("../config/mail");
const Message = require("../models/message");

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save message in MongoDB
    await Message.create({ name, email, message });

    // Send email notification
    await transporter.sendMail({
      from: email, // visitor's email
      to: process.env.EMAIL, // your Gmail
      subject: "New Portfolio Message",
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.log("ERROR DETAILS:");
    console.log(error);
  res.status(500).json({ success: false, message: "Email failed" });
  }
};

module.exports = { sendMessage };
