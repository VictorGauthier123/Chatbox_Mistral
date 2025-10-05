from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os

from dotenv import load_dotenv

# Charger le fichier .env
load_dotenv(dotenv_path=".env")

app = FastAPI()

# Autoriser ton front (http://localhost:5173) à appeler ton back
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en prod mets ton vrai domaine
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")

class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
def chat(req: ChatRequest):
    print("DEBUG API KEY:", MISTRAL_API_KEY)

    headers = {"Authorization": f"Bearer {MISTRAL_API_KEY}"}
    data = {
        "model": "mistral-tiny",  # ou "mistral-medium"
        "messages": [{"role": "user", "content": req.message}]
    }

    response = requests.post(
        "https://api.mistral.ai/v1/chat/completions",
        headers=headers,
        json=data
    )

    result = response.json()
    print("DEBUG MISTRAL RESPONSE:", result)  # 👈 pour voir ce que renvoie l’API

    if "choices" not in result:
        return {"error": result}

    return {"reply": result["choices"][0]["message"]["content"]}

