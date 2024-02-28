import "@/styles/globals.css";
import { SocketProvider } from "@/contexts/socketProvider";
import { SessionProvider } from "next-auth/react"
import useLocalStorage from "@/hooks/useLocalStorage";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [id, setId] = useLocalStorage("id");
  return (
    <SessionProvider>
      <SocketProvider id={id}>
        <Component {...pageProps} />
      </SocketProvider>
    </SessionProvider>
  );
}
