import Image from "next/image";
import { Inter } from "next/font/google";
import PreferencePage from "./Preferences.page";
import LandingPage from "./Landing.page";
import Chat from "./Chat.page";

export default function Home() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Chat />
    </div>
  );
}
