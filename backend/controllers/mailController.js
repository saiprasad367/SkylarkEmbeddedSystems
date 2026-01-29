const axios = require("axios");

/* ================================
   PREMIUM USER EMAIL TEMPLATE
================================ */
const buildUserEmailTemplate = (name) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Skylark Embedded Systems</title>
</head>

<body style="margin:0;padding:0;background:#020617;font-family:Segoe UI,Roboto,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;background:#020617;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;background:#020617;border-radius:18px;overflow:hidden;
                 box-shadow:0 0 50px rgba(56,189,248,0.25);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0ea5e9,#22d3ee);
                       padding:32px;text-align:center;color:#ffffff;">
              <h1 style="margin:0;font-size:28px;letter-spacing:1px;">
                Skylark Embedded Systems
              </h1>
              <p style="margin-top:8px;font-size:13px;opacity:0.95;">
                Embedded • IoT • Automation • Digital Intelligence
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:32px;color:#e5e7eb;">

              <h2 style="margin-top:0;color:#38bdf8;font-size:20px;">
                Hello ${name},
              </h2>

              <p style="line-height:1.7;font-size:15px;color:#cbd5f5;">
                Thank you for contacting <strong>Skylark Embedded Systems</strong>.
                We’ve successfully received your message, and our technical team
                is already reviewing your request.
              </p>

              <p style="line-height:1.7;font-size:15px;color:#cbd5f5;">
                We specialize in building intelligent embedded systems, automation platforms,
                digital display solutions, and IoT-driven technologies designed for
                industrial and enterprise applications.
              </p>

              <!-- CTA BUTTON -->
              <div style="text-align:center;margin:36px 0;">
                <a href="https://skylark-embedded-systems.vercel.app"
                  style="
                    background:linear-gradient(135deg,#0ea5e9,#22d3ee);
                    color:#020617;
                    text-decoration:none;
                    padding:16px 34px;
                    border-radius:40px;
                    font-weight:700;
                    font-size:14px;
                    display:inline-block;
                    box-shadow:0 0 25px rgba(56,189,248,0.5);
                  ">
                  Explore Our Solutions
                </a>
              </div>

              <div style="border-top:1px solid rgba(148,163,184,0.2);
                          padding-top:20px;margin-top:20px;">

                <p style="font-size:14px;color:#94a3b8;margin-bottom:6px;">
                  Need urgent assistance?
                </p>
                <p style="font-size:14px;color:#94a3b8;margin:0;">
                  📧 info@skylarkembeddedsystems.com<br/>
                  📞 +91-8341138387
                </p>

              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#020617;padding:20px;text-align:center;
                       color:#64748b;font-size:12px;">
              © ${new Date().getFullYear()} Skylark Embedded Systems<br/>
              Hyderabad, Telangana, India
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};

/* ================================
   CONTACT CONTROLLER
================================ */
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
    const headers = {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json"
    };

    /* ==========================
       ADMIN EMAIL (PLAIN TEXT)
    =========================== */
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Skylark Website",
          email: process.env.ADMIN_EMAIL
        },
        to: [{ email: process.env.ADMIN_EMAIL }],
        subject: "New Contact Form Submission",
        textContent: `
You have received a new message from your website.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`
      },
      { headers, timeout: 10000 }
    );

    /* ==========================
       USER EMAIL (PREMIUM HTML)
    =========================== */
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Skylark Embedded Systems",
          email: process.env.ADMIN_EMAIL
        },
        to: [{ email }],
        subject: "We received your message — Skylark Embedded Systems",
        htmlContent: buildUserEmailTemplate(name)
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
