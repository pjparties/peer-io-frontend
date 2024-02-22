import { useState } from "react";

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user1" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-400">
      <div className="chat-container h-4/5 w-3/5 bg-white">
        <div>
            {messages.map((message, index) => (
              <div key={index} className={`w-3/5 rounded-lg flex px-4 py-2 ${message.sender === "user1" ? "bg-green-500 justify-end" : "bg-gray-300"}`} >
                {message.text}
              </div>
            ))}
        </div>
      </div>
      <div className="mesg-area">
        <input
          type="text"
          value={newMessage}
          className="w-[50vw]"
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Type your message..."
        />
        <button className="rounded-xl border bg-blue-500 px-2 py-1 text-white ml-2" onClick={handleSendMessage}>
            Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
