import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    try {
      const newSocket = io("http://localhost:8000", { query: { id } });
      setSocket(newSocket);
      return () => newSocket.close();
    } catch (error) {
      console.log("ERROR CONNECTING TO SOCKET BC", error);
    }
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
