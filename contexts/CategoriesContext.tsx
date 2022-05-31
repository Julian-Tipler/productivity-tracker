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
  const [categories, setCategories] = useState<[]>([]);
  const { currentUser } = useContext(AuthContext) as any;

  const createCategory = async ({
    name,
    ratingParameter,
  }: {
    name: string;
    ratingParameter: string;
  }) => {
    await addDoc(collection(db, "categories"), {
      name: name,
      ratingParameter: ratingParameter,
      userId: currentUser.uid,
    });

    await getCategories();
  };

  const getCategories = async () => {
    const q = query(
      collection(db, "categories"),
      where("userId", "==", currentUser.uid)
    );
    const snapshot = await getDocs(q);

    await setCategories(
      snapshot.docs.map((doc) => {
        return {id:doc.id,...doc.data()};
      })
    );
  };

  const deleteCategory = async ({ id }: { id: string }) => {
    await deleteDoc(doc(db, "categories", id));

    await getCategories();

  };

  const value = {
    categories,
    createCategory,
    getCategories,
    deleteCategory,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
