const aiService = require('../services/openRouterService');

exports.chatWithAI = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const responseText = await aiService.generateResponse(message);
        res.json({ response: responseText });
    } catch (error) {
        console.error("Chat Controller Error:", error);
        res.status(500).json({ error: "Failed to communicate with AI Assistant." });
    }
};
