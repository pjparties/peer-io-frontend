import React from "react";
import { useState } from "react";
import Link from "next/link";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  /*function showMessageHistory() {
    let prevSender = "";
    return messages.map((message, index) => (
      <div key={index} className="m-2">
        {prevSender !== message.sender && (
          <div
            className={`mx-3 flex text-sm ${message.sender === "You" ? "justify-end" : ""}`}
          >
            {(prevSender = message.sender)}
          </div>
        )}
        <div
          className={`flex rounded-lg border-black px-4 py-2 font-semibold ${message.sender === "You" ? "justify-end bg-green-500" : "bg-gray-300"}`}
        >
          {message.text}
        </div>
      </div>
    ));
  }*/

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-omeglebg px-8">
      <div className="chat-container h-4/5 w-full rounded-lg border-x-2 border-y-2 border-gray-400 bg-white">
        <p className="mb-4 ml-1 font-medium text-gray-800">
          You're now chatting with a random stranger. Say hi!
        </p>
        <div className="all-messages-here ml-1">
          <div className="message transition duration-300 ease-in">
            {messages.map((message, index) => (
              <div key={index}>
                <span
                  className={`${message.sender === "You" ? "font-bold text-user1" : "font-bold text-user2"}`}
                >
                  {message.sender === "You" ? "You: " : "Stranger: "}
                </span>
                <text className="text-here">{message.text}</text>
              </div>
            ))}
          </div>
          <div className="message">
            <span className="font-bold text-user2">Stranger: </span>Hello how
            are you doing !
          </div>
        </div>
      </div>
      <div className="bottom-row-wrapper ml-0 flex w-full items-center">
        <div className="m-3">
          <Link href="/home">
            <button className="ml-2 rounded-xl border-gray-500 bg-warning px-20 py-4 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#c1121f]">
              End
            </button>
          </Link>
        </div>
        <div className="input-area pl-4">
          <input
            type="text"
            value={newMessage}
            className="mt-2 h-16 w-[70vw] rounded-lg border-2 border-gray-400 px-2 py-1"
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
            className="ml-2 rounded-xl border-gray-500 bg-accent px-4 py-4 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-accentdark"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
