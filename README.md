# Mistral Chatbot

A simple chatbot built with **React + TypeScript (frontend)** and **FastAPI (backend)**, connected to the Mistral API to generate conversational responses.

## Screenshot

<img width="1752" height="1306" alt="image" src="https://github.com/user-attachments/assets/6d1125be-69c6-42c6-9011-a2070b216b09" />


## Features

- Modern UI built with **React + TypeScript**
- **FastAPI backend** to handle requests to Mistral API
- Support for Chat Completions API (`mistral-tiny`, `mistral-medium`, etc.)
- Conversation management (user ↔ assistant messages)
- Error handling (displays a message if the backend is unavailable)
- Responsive and centered design

## Tech Stack

### Frontend
- React + TypeScript
- Vite for bundling

### Backend
- Python 3.11+
- FastAPI
- Uvicorn (ASGI server)
- python-dotenv (environment variable management)
- requests (API calls)

## Project Structure

```
CHATBOT_MISTRAL/
│── backend/
│   ├── main.py          # FastAPI backend
│   ├── .env             # Environment variables (Mistral API key)
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.tsx   # Chat component
│   │   ├── App.tsx           # Main component
│   │   ├── App.css           # Global styles
│   │   └── main.tsx          # React entry point
│   ├── package.json
│
│── README.md
```

## Installation and Setup

### 1. Clone the repo

```bash
git clone https://github.com/VictorGauthier123/Chatbox_Mistral.git
cd chatbox_mistral
```

### 2. Backend (FastAPI)

1. Create and activate a virtual environment:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate   # Linux / macOS
.venv\Scripts\activate    # Windows
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Set up `.env` with your Mistral API key:

```ini
MISTRAL_API_KEY=YOUR_API_KEY
```

4. Start the backend:

```bash
uvicorn main:app --reload --port 8000
```

### 3. Frontend (React + TypeScript)

1. Go to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. Open the app at: [http://localhost:5173](http://localhost:5173)


