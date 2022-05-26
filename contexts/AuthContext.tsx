import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import Navigation from "../navigation";

export const AuthContext = React.createContext({});

export function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState("");

  const navigation = useNavigation();

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    login,
    signUp,
    logout,
  };
  console.log(currentUser)
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
