import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";

const SocketChat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = process.env.SERVER_URL || "localhost:5000";

  useEffect(() => {
    const { room, name } = queryString.parse(location.search);
    const socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit("create or join", { clientName: name, room: room });
    console.log(location.search);
    console.log(name, room);
  }, [ENDPOINT, location.search]);
  return (
    <div>
      <h1>Socket Chat</h1>
    </div>
  );
};

export default SocketChat;
