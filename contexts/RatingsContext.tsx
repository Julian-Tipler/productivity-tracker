import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
  Timestamp,
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

  const createRating = async ({ id, value }: { id: string; value: string }) => {
    await addDoc(collection(db, "categories", id, "ratings"), {
      createdAt: serverTimestamp(),
      value,
    });
  };

  function getStartOfToday() {
    const now = new Date();
    now.setHours(4, 0, 0, 0); // +4 hours for Central Time
    const timestamp = Timestamp.fromDate(now);
    return timestamp; // ex. 1631246400
  }

  const getDailys = async () => {
    const userCollectionsQ = query(
      collection(db, "categories"),
      where("userId", "==", currentUser.uid)
    );
    const snapshot = await getDocs(userCollectionsQ);
    //this is all the user's categories.
    //iterate through each category and check if the category contains
    //a rating .where("createdAt",<,Date.endOfToday).where("createdAt",>,Date.startOfToday)
    //If it does NOT, add that category data to setDailys
    snapshot.forEach(async (col) => {
      const docsWithRatings = await getDocs(
        query(collection(db, `categories/${col.id}/ratings`),
        where("createdAt",">",getStartOfToday()))
      );
      docsWithRatings.forEach((doc) => {
        console.log("FOUND SOME RATINGS", doc.id);
      });
    });

    const collections = snapshot.docs.map((doc: QueryDocumentSnapshot<any>) => {
      return { id: doc.id, ...doc.data() };
    });

    await setDailys(
      snapshot.docs.map((doc: QueryDocumentSnapshot<any>) => {
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
    <DailysContext.Provider value={value}>{children}</DailysContext.Provider>
  );
}
