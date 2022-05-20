import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState, createContext, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";

const authContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState("");

  function signUp(email,password) {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  function logIn(email,password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  const value = {
    currentUser,
    login,
    signUp,
    logout,
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return unsubscribe
  },[])

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext);
}


