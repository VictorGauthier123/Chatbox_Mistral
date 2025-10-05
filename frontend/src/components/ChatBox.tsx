import { useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function ChatBox() {
  const [message, setMessage] = useState<string>("");
  const [conversation, setConversation] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Ajouter le message utilisateur dans la conversation
    setConversation((prev) => [...prev, { role: "user", content: message }]);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      setConversation((prev) => [
        ...prev,
        { role: "assistant", content: data.reply }
      ]);
    } catch (error) {
      setConversation((prev) => [
        ...prev,
        { role: "assistant", content: "Erreur de connexion au backend" }
      ]);
    }

    setMessage(""); // reset input
  };

  return (
    <div>
      <div
        style={{
          minHeight: "300px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
          overflowY: "auto",
          maxHeight: "400px"
        }}
      >
        {conversation.map((msg, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "10px",
              textAlign: msg.role === "user" ? "right" : "left"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "12px",
                background: msg.role === "user" ? "#007bff" : "#f4f4f4",
                color: msg.role === "user" ? "white" : "black"
              }}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // empêche le retour à la ligne
            sendMessage();      // envoie le message
            }
        }}
        placeholder="Écris ton message..."
        style={{ width: "100%", height: "80px", padding: "10px" }}
      />
      <button
        onClick={sendMessage}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          background: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Envoyer
      </button>
    </div>
  );
}

export default ChatBox;
