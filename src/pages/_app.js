import "@/styles/globals.css";
import { SocketProvider } from "@/contexts/socketProvider";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <SocketProvider id="123">
        <Component {...pageProps} />
      </SocketProvider>
    </SessionProvider>
  );
}
