import React from "react";
import { useState } from "react";
import { Selector } from "@/components/Selector";
import Chat from "@/pages/(old) Chat.page";

const Preferences = () => {
  const [show, setShow] = useState("selector"); // 3 options: selector, chat

  const startChatting = () => {
    setShow("chat");
  };

  return (
    <div className="flex h-screen w-full flex-col border-4">
      {show === "selector" && <Selector startChatting={startChatting} />}
      {show === "chat" && <Chat />}
    </div>
  );
};

export default Preferences;
