import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  function showMessageHistory() {
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
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-400">
      <div className="chat-container h-4/5 w-3/5 overflow-auto rounded-md bg-white">
        {showMessageHistory()}
      </div>
      <div className="mesg-area m-2">
        <input
          type="text"
          value={newMessage}
          className="w-[50vw] rounded-md px-2 py-1"
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
          className="ml-2 rounded-lg border bg-blue-500 px-2 py-1 text-white"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
