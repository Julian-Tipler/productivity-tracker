import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

export const getCategories = async (setCategories: any, currentUser: any) => {
  const q = query(
    collection(db, "categories"),
    where("userId", "==", currentUser.uid)
  );
  const snapshot = await getDocs(q);
  setCategories(snapshot.docs.map((doc) => doc.data()));
};
