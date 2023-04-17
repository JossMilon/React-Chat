import { useContext, createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";

const context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  const googleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <context.Provider
      value={{ googleSignIn, googleSignOut, user, message, setMessage }}
    >
      {children}
    </context.Provider>
  );
};

export const UserAuth = () => {
  return useContext(context);
};
