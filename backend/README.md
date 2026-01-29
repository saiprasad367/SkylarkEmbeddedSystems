# Skylark Backend

This is the backend for the Skylark website, providing the Contact Form email service and the AI Chatbot integration (via Ollama).

## Features

- **Contact Form**: Sends emails to Admin and Auto-replies to users using Nodemailer.
- **AI Chatbot**: Integrates with **OpenRouter API** (using `google/gemini-2.0-flash-001`) to provide fast, company-specific AI responses.

## Prerequisites

1.  **Node.js**: Installed on your machine.
2.  **OpenRouter API Key**: Required in `.env`.

## Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment Variables:
    - Update `.env` with your credentials:
    ```env
    PORT=5000
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ADMIN_EMAIL=admin_email@example.com
    OPENROUTER_API_KEY=sk-or-v1-your-key-here
    ```
    > **Note**: For Gmail, generate an **App Password** from your Google Account settings (Security > 2-Step Verification > App passwords).

## Running the Server

Start the backend server:

```bash
npm start
``` 
Or for development (auto-restart):
```bash
npm run dev
```

The server will run at `http://localhost:5000`.

## Frontend Integration

The frontend (Vite) is configured to proxy API requests to `http://localhost:5000`.

- **Contact Endpoint**: `POST /api/contact/send`
- **Chat Endpoint**: `POST /api/chat`

Ensure both the Frontend and Backend servers are running simultaneously.
