const nodemailer = require('nodemailer');

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use host/port for other providers
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendContactEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Please fill in all required fields." });
    }

    try {
        // 1. Send Email to Admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
            text: `You have received a new message from your website.

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}`
        };

        await transporter.sendMail(adminMailOptions);

        // 2. Send Auto-Reply to User
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thanks for contacting Skylark`,
            text: `Hello ${name},

Thank you for contacting Skylark.
We have received your message and our team will get back to you shortly.

Best regards,
Skylark Team`
        };

        await transporter.sendMail(userMailOptions);

        res.status(200).json({ success: true, message: "Message sent successfully!" });

    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ success: false, message: "Failed to send email. Please try again later." });
    }
};
