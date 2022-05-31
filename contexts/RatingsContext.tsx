import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { getCategories } from "../api/Categories/getCategories";
import { db } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";

export const CategoriesContext = React.createContext({});

export type Category = {
  id: string;
  name: string;
  ratingParameter: string;
  userId: string;
};

export function CategoriesProvider({ children }: { children: any }) {
  const [ratings, setRatings] = useState<[]>([]);
  const { currentUser } = useContext(AuthContext) as any;

  const createRating = async ({
    id,
  }: {
    id: string;
  }) => {
    await addDoc(collection(db, "categories",id,"ratings"), {
        createdAt:
    });

    await getCategories();
  };

  const getCategories = async () => {
    const q = query(
      collection(db, "categories"),
      where("userId", "==", currentUser.uid)
    );
    const snapshot = await getDocs(q);

    await setRatings(
      snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      })
    );
  };

  const value = {
    ratings,
    getCategories,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
