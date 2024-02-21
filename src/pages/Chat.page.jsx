import React from "react";
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
    <div className="bg-omeglebg flex h-screen w-screen flex-col items-center justify-center px-8">
      <div className="chat-container h-4/5 w-full rounded-lg border-x-2 border-y-2 border-gray-400 bg-white">
        <p className="mb-4 ml-1 font-medium text-gray-800">
          You're now chatting with a random stranger. Say hi!
        </p>
        <div className="all-messages-here ml-1">
          <div className="message transition duration-300 ease-in">
            {messages.map((message, index) => (
              <div key={index}>
                <span
                  className={`${message.sender === "user1" ? "text-user1 font-bold" : "text-user2 font-bold"}`}
                >
                  {message.sender === "user1" ? "You: " : "Stranger: "}
                </span>
                <text className="text-here">
                  {message.text}
                </text>
              </div>
            ))}
          </div>
          <div className="message">
            <span className="text-user2 font-bold">Stranger: </span>Hello how
            are you doing !
          </div>
        </div>
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          className="mt-2 w-[70vw] h-16 rounded-lg border-2 border-gray-400 px-2 py-1"
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Type your message..."
        />
        <button
          className="ml-2 rounded-xl border bg-accent px-4 py-4 font-bold text-white hover:scale-105 hover:bg-accentdark transition duration-300 ease-in-out"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
