import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { SocketProvider } from "@/contexts/socketProvider";
import { SessionProvider } from "next-auth/react"
import useLocalStorage from "@/hooks/useLocalStorage";
import {v4 as uuidV4} from "uuid";


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const initialValue = (uuidV4());
  const [id,setId] = useLocalStorage("peerio-id", initialValue);
  // TODO: this useEffect changes value of id every render. This is not good.
  useEffect(() => {
    setId(initialValue);
  }, []);
  return (
    <SessionProvider>
      <SocketProvider id={id}>
        <Component {...pageProps} />
      </SocketProvider>
    </SessionProvider>
  );
}
