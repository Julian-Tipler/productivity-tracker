import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  serverTimestamp,
  DocumentData,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";
import { getStartOfToday } from "./helper";

export const CategoriesContext = React.createContext({});

export type Daily = {
  id: string;
  name: string;
  ratingParameter: string;
  userId: string;
};

export type Category = {
  id: string;
  name: string;
  ratingParameter: string;
  userId: string;
};

export type Rating = any;

export function CategoriesProvider({ children }: { children: any }) {
  const [dailys, setDailys] = useState<[] | Daily[]>([]);
  const [categories, setCategories] = useState<[] | Category[]>([]);
  const [ratings, setRatings] = useState<[] | Rating[]>([]);
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

    const catHasNoRatingToday = async (id: string) => {
      const ratings = await getDocs(
        query(
          collection(db, `categories/${id}/ratings`),
          where("createdAt", ">", getStartOfToday())
        )
      );
      return !ratings.size;
    };

    const dailyArray: Daily[] = [];

    await snapshot.forEach(async (cat) => {
      if (await catHasNoRatingToday(cat.id)) {
        dailyArray.push({
          id: cat.id,
          name: cat.data().name,
          ratingParameter: cat.data().ratingParameter,
          userId: cat.data().userId,
        });
      }
    });

    await setDailys(dailyArray);

    await setCategories(
      snapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      })
    );
  };

  const deleteCategory = async ({ id }: { id: string }) => {
    // await deleteDoc(doc(db, "categories", id, 'ratings'));
    const docToDelete = doc(db, "categories", id);

    const ratings = await getDocs(
      query(
        collection(db, `categories/${id}/ratings`),
        where("createdAt", ">", getStartOfToday())
      )
    );
    await ratings.forEach((rating: DocumentData) => {
      deleteDoc(doc(db, `categories/${id}/ratings/${rating.id}`));
    });
    await deleteDoc(docToDelete);

    await getCategories();
  };

  const createRating = async ({ id, value }: { id: string; value: string }) => {
    await addDoc(collection(db, "categories", id, "ratings"), {
      createdAt: serverTimestamp(),
      value,
    });
  };

  const getRatings = async ({ id }: { id: string }) => {
    const q = query(
      collection(db, `categories/${id}/ratings`),
    );
    const snapshot = await getDocs(q);
    await setRatings(
      snapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      })
    );
  };

  const value = {
    categories,
    createCategory,
    getCategories,
    deleteCategory,
    dailys,
    createRating,
    ratings,
    getRatings,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
