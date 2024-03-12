import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const SocketChat = () => {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [roomCode, setRoomCode] = useState("room1");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8000"); // Replace with your backend URL
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleJoinRoom = (roomCode) => {
    socket.emit("joinRoom", roomCode);
    console.log("Joined room: ", roomCode);
  };

  const handleSendMessage = () => {
    if (!message) {
      console.log("Please enter a message to send.");
      return;
    }
    socket.emit("sendMessage", roomCode, message);
    setSentMessages((prevMessages) => [...prevMessages, message]);
    setMessage("");
    console.log("Sent message: ", message);
  };

  const handleReceiveMessage = () => {
    socket.on("receiveMessage", (message) => {
      console.log("idhar aaya: ", message);
      setReceivedMessages((prevMessages) => [...prevMessages, message]);
    });
  };

  useEffect(() => {
    console.log(receivedMessages);
  }, [receivedMessages]);

  useEffect(() => {
    if (socket) {
      handleReceiveMessage();
    } else {
      console.log("You are not connected to a room. Please join a room.");
    }
  }, [socket]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={() => handleJoinRoom(roomCode)}>Join Room</button>
      <p>Received Messages:</p>
      <ul>
        {sentMessages.map((message, index) => (
          <li key={index}>You: {message}</li>
        ))}
        {receivedMessages.map((message, index) => (
          <li key={index}>Stranger: {message}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocketChat;
