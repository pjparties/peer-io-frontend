import React, { useState, useEffect } from "react";
import Link from "next/link";
import io from "socket.io-client";
import useAuth from "@/components/useAuth";

const Chat = () => {
  const { session, status } = useAuth();
  const [socket, setSocket] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isInRoom, setIsInRoom] = useState(false);
  const [roomCode, setRoomCode] = useState("room1");

  useEffect(() => {
    if (status === 'authenticated') {
      const newSocket = io("http://localhost:8000"); 
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [status]);

  useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", (message) => {
        const obj = { sender: "Stranger", message: message };
        setMessages((prevMessages) => [...prevMessages, obj]);
      });
    }
  }, [socket]);

  const handleJoinRoom = (roomCode) => {
    if (!socket) {
      console.log("You are not connected to a room. Please join a room.");
      return;
    }
    if (!roomCode) {
      console.log("Please enter a room code to join a room.");
      return;
    }
    socket.emit("joinRoom", roomCode);
    console.log("Joined room: ", roomCode);
    setIsInRoom(true);
  };

  const handleSendMessage = () => {
    if (!chatMessage) {
      const obj = { message: "Please enter a message to send." };
      setErrorMessages((prevErrors) => [...prevErrors, obj]);
      console.log("Please enter a message to send.");
      return;
    }
    if (!isInRoom) {
      const obj = { message: "Please join a room first." };
      setErrorMessages((prevErrors) => [...prevErrors, obj]);
      console.log("Please join a room first.");
      return;
    }
    socket.emit("sendMessage", roomCode, chatMessage);
    const obj = { sender: "You", message: chatMessage };
    setMessages((prevMessages) => [...prevMessages, obj]);
    setChatMessage("");
    console.log("Sent message: ", chatMessage);
  };

  const handleLeaveRoom = () => {
    if (socket) {
      socket.emit("leaveRoom", roomCode);
      console.log(`User left room ${roomCode}`);
      setIsInRoom(false);
    }
  };

  if (status !== 'authenticated') {
    return (
      <div>
        <h1>You are not logged in... Redirecting</h1>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-omeglebg px-8">
      <div className="chat-container h-4/5 w-full rounded-lg border-x-2 border-y-2 border-gray-400 bg-white">
        <p className="mb-4 ml-1 font-medium text-gray-800">
          You're now chatting with a random stranger. Say hi!
        </p>
        <div className="all-messages-here ml-1">
          <div className="message transition duration-300 ease-in">
            {/* error messages conditionally rendered */}
            {messages.length == 0 &&
              errorMessages.map((message, index) => (
                <div key={index}>
                  <span className="font-bold text-warning">Error: </span>
                  <text className="font-bold text-warning">
                    {message.message}
                  </text>
                </div>
              ))}
            {/* real messages typed here */}
            {messages.map((message, index) => (
              <div key={index}>
                <span
                  className={`${message.sender === "You" ? "font-bold text-user1" : "font-bold text-user2"}`}
                >
                  {message.sender === "You" ? "You: " : "Stranger: "}
                </span>
                <text className="text-here">{message.message}</text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-row-wrapper ml-0 flex w-full items-center justify-center">
        <div className="" onClick={handleLeaveRoom}>
          <Link href="/home">
            <button className="ml-2 rounded-xl border-gray-500 bg-warning px-6 py-3 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#c1121f]">
              Leave Room
            </button>
          </Link>
        </div>
        <div
          className=""
          onClick={() => {
            handleJoinRoom(roomCode);
          }}
        >
          <button className="ml-2 rounded-xl border-gray-500 bg-accentdark px-6 py-3 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-accentdark">
            Join Room
          </button>
        </div>
        <div className="input-area pl-4">
          <input
            type="text"
            value={chatMessage}
            className="h-16 w-[60vw] rounded-lg border-2 border-gray-400 px-2 py-1"
            onChange={(e) => setChatMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
          />
          <button
            className="ml-2 rounded-xl border-gray-500 bg-accent px-4 py-4 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-accent"
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
