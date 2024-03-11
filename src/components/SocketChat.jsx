import React, { useEffect, useState } from "react";
import io from "socket.io-client";
// import queryString from "query-string";

const SocketChat = ({}) => {
  const socket = io("http://localhost:8000");
  socket.on("connect", () => {
    console.log("Connected to server", socket.id);
  });

  const sendMessage = (message, roomId) => {
    console.log("Message sent", message, roomId);
    socket.emit("send-message", { roomId: roomId, msg: message });
  };

  const receiveMessge = (message) => {
    socket.on("receive-message", (message) => {
      console.log("Message received", message);
    });
  };  
  useEffect(() => {
    receiveMessge();
  }, []);
  
  return (
    <div>
      <h1>Socket Chat</h1>
      {/* add a input and send button */}
      <input type="text" id="messg" />
      <button
        onClick={() =>
          sendMessage(document.getElementById("messg").value, "room1")
        }
      >
        Send
      </button>
    </div>
  );
};

export default SocketChat;
