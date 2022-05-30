import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, collection, doc, addDoc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import Navigation from "../navigation";

export const CategoryFormContext = React.createContext({});

export function CategoryFormProvider({ children }: { children: any }) {
  const createCategory = () => {};

  useEffect(() => {}, []);

  const value = {
    createCategory,
  };

  return (
    <CategoryFormContext.Provider value={value}>
      {children}
    </CategoryFormContext.Provider>
  );
}
