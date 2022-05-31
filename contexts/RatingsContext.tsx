import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";

export const RatingsContext = React.createContext({});

export type Rating = {
  id: string;
  name: string;
  ratingParameter: string;
  userId: string;
};

export function RatingsProvider({ children }: { children: any }) {
  const [ratings, setRatings] = useState<[]>([]);
  const { currentUser } = useContext(AuthContext) as any;

  const createRating = async ({
    id,
    value
  }: {
    id: string;
    value: string;
  }) => {
    await addDoc(collection(db, "categories", id, "ratings"), {
      createdAt: serverTimestamp(),
      value
    });
  };

  const getRatings = async () => {
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
    createRating,
    getRatings,
  };

  return (
    <RatingsContext.Provider value={value}>
      {children}
    </RatingsContext.Provider>
  );
}
