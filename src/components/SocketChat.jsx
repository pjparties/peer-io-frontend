import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const SocketChat = () => {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [isInRoom, setIsInRoom] = useState(false);
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
    setIsInRoom(true);
  };

  const handleSendMessage = () => {
    if (!message) {
      console.log("Please enter a message to send.");
      return;
    }
    if (!isInRoom) {
      console.log("Please join a room first.");
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

  const handleLeaveRoom = () => {
    if (socket) {
      socket.emit("leaveRoom", roomCode);
      console.log(`User left room ${roomCode}`);
      setIsInRoom(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-80 rounded bg-white p-4 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Socket Chat</h1>
        <p className="mb-2 font-bold">
          Currently in Room ?:  {isInRoom ? "True" : "False"}
        </p>
        <p className="mb-2 font-bold">Room Code: {isInRoom? roomCode: ""}</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mb-2 w-full rounded border p-2"
        />
        <button
          onClick={handleSendMessage}
          className="mb-2 w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Send Message
        </button>
        <button
          onClick={() => handleJoinRoom(roomCode)}
          className="mb-2 w-full rounded bg-green-500 p-2 text-white hover:bg-green-600"
        >
          Join Room
        </button>
        <button
          onClick={handleLeaveRoom}
          className="mb-2 w-full rounded bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Leave Room
        </button>
        <p className="mb-2 font-bold">Your Messages:</p>
        <ul className="divide-y divide-gray-200">
          {sentMessages.map((message, index) => (
            <li key={index} className="p-2">
              You: {message}
            </li>
          ))}
          {receivedMessages.map((message, index) => (
            <li key={index} className="p-2">
              Stranger: {message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocketChat;
