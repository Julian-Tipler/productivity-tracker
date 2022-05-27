import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import Navigation from "../navigation";

export const AuthContext = React.createContext({});

export function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState("");

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (cred) => {
        // console.log(cred)
        setDoc(doc(db, "users"), {
          email: cred.user.email,
          authId: cred.user.uid
        });
      }
    );
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser as any);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
