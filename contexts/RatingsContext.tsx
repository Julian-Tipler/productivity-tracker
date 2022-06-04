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

export const DailysContext = React.createContext({});

export type Rating = {
  id: string;
  name: string;
  ratingParameter: string;
  userId: string;
};

export function DailysProvider({ children }: { children: any }) {
  const [dailys, setDailys] = useState<[] | Rating[]>([]);
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

  const getDailys = async () => {
    const q = query(
      collection(db, "categories"),
      where("userId", "==", currentUser.uid)
    );
    const snapshot = await getDocs(q);

    await setDailys(
      snapshot.docs.map((doc:any) => {
        return { id: doc.id, ...doc.data() };
      })
    );
  };

  const value = {
    dailys,
    createRating,
    getDailys,
  };

  return (
    <DailysContext.Provider value={value}>
      {children}
    </DailysContext.Provider>
  );
}
