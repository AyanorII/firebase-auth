import { onAuthStateChanged } from "firebase/auth";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import "../styles/globals.css";

export const UserContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        router.push("/");
      } else {
        router.push("/login");
      }
    });
  }, [user, router.asPath]);

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
