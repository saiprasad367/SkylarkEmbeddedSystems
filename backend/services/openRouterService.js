const axios = require('axios');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const COMPANY_PROMPT = `
You are a friendly and professional AI assistant for Skylark Embedded Systems.
Your goal is to help users with their questions about the company.
You MUST answer ONLY using the information provided below.
Do NOT invent answers. If the answer is not in the text, politely say you don't know and offer to connect them with the sales team.
Keep your answers CONCISE and to the point.
Be polite and warm in your tone.

If the user asks something unrelated to Skylark, respond:
"I can only help with questions about Skylark Embedded Systems and our services."

=====================
COMPANY INFORMATION:
Skylark Embedded Systems is a Hyderabad, India based company established in 2017.
It specializes in design, development, manufacturing, supply, and after-sales support of embedded systems and digital solutions.
Location: House No-5-9, Nagaram Main Road, Nagaram, Keesara Mandal, Hyderabad - 500062, Telangana, India.
Phone: +91-8341138387
Emails: info@skylarkembeddedsystems.com, hr@skylarkembeddedsystems.com, sales@skylarkembeddedsystems.com
Website: https://skylarkembeddedsystems.com/

PRODUCTS & SERVICES:
- Embedded systems design and development
- Railway Passenger Information Systems and station displays
- GPS based clocks and tracking systems
- LED Scrolling Displays and digital signage
- Digital Nurse Calling and communication systems
- Public addressing and automation solutions
- LED Bank Rate and custom display boards

INDUSTRIES SERVED:
Railways, Pharma, Telecommunications, Transportation, Power sectors

SUPPORT:
Offers after-sales support and customer service.

=====================
`;

exports.generateResponse = async (userMessage) => {
    try {
        if (!userMessage) throw new Error("Message is required");

        const response = await axios.post(
            OPENROUTER_URL,
            {
                model: "google/gemini-2.0-flash-001", // Fast and reliable model
                messages: [
                    {
                        role: "system",
                        content: COMPANY_PROMPT
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ]
            },
            {
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "HTTP-Referer": "https://skylarkembeddedsystems.com", // Required by OpenRouter for ranking
                    "X-Title": "Skylark AI Assistant", // Optional
                    "Content-Type": "application/json"
                }
            }
        );

        if (response.data && response.data.choices && response.data.choices.length > 0) {
            return response.data.choices[0].message.content;
        } else {
            throw new Error("Invalid response from OpenRouter");
        }

    } catch (error) {
        console.error("OpenRouter Service Error:", error.response?.data || error.message);
        return "I apologize, but I'm having trouble connecting right now. Please try again later.";
    }
};
