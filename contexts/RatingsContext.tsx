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

export type Daily = {
  id: string;
  name: string;
  ratingParameter: string;
  userId: string;
};

export function DailysProvider({ children }: { children: any }) {
  const [dailys, setDailys] = useState<[] | Daily[]>([]);
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
    const catsSnapshot = await getDocs(userCollectionsQ);
    //this is all the user's categories.
    //iterate through each category and check if the category contains
    //a rating .where("createdAt",<,Date.endOfToday).where("createdAt",>,Date.startOfToday)
    //If it does NOT, add that category data to setDailys

    const catHasNoRatingToday = async (id:string) => {
      const ratings = await getDocs(
        query(
          collection(db, `categories/${id}/ratings`),
          where("createdAt", ">", getStartOfToday())
        )
      );
      return !ratings.size;
    };

    await catsSnapshot.forEach(async (cat) => {
      if (await catHasNoRatingToday(cat.id)) {
        setDailys((prev) => [
          ...prev,
          {
            id: cat.id,
            name: cat.data().name,
            ratingParameter: cat.data().ratingParameter,
            userId: cat.data().userId,
          },
        ]);
      }
    });
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
