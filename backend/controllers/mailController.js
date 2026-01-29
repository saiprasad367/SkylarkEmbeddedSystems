const nodemailer = require("nodemailer");

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendContactEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields."
    });
  }

  try {
    // 1. Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: `
You have received a new message from your website.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`
    };

    await transporter.sendMail(adminMailOptions);

    // 2. Auto-reply to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting Skylark Embedded Systems",
      text: `
Hello ${name},

Thank you for contacting Skylark Embedded Systems.
We have received your message and our team will get back to you shortly.

Best regards,
Skylark Embedded Systems Team
`
    };

    await transporter.sendMail(userMailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!"
    });
  } catch (error) {
    console.error("Email Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later."
    });
  }
};
