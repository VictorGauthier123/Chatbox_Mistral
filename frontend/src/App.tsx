import ChatBox from "./components/ChatBox";
import "./App.css";

function App() {
  return (
    <div style={{ maxWidth: "600px", width: "100%", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Mistral Chatbot</h1>
      <ChatBox />
    </div>
  );
}

export default App;

