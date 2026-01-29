const axios = require("axios");

exports.sendContactEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields."
    });
  }

  try {
    const headers = {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json"
    };

    // Admin Email
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Skylark Website", email: process.env.ADMIN_EMAIL },
        to: [{ email: process.env.ADMIN_EMAIL }],
        subject: "New Contact Form Submission",
        textContent: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`
      },
      { headers, timeout: 10000 }
    );

    // User Auto Reply
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Skylark Website", email: process.env.ADMIN_EMAIL },
        to: [{ email }],
        subject: "Thanks for contacting Skylark Embedded Systems",
        textContent: `
Hello ${name},

Thank you for contacting Skylark Embedded Systems.
We have received your message and our team will get back to you shortly.

Best regards,
Skylark Embedded Systems Team
`
      },
      { headers, timeout: 10000 }
    );

    return res.json({
      success: true,
      message: "Message sent successfully!"
    });
  } catch (error) {
    console.error("Brevo Email Error:", error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later."
    });
  }
};
