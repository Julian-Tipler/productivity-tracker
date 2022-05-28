import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

export const createCategory = async (name: string, currentUser: any) => {
  addDoc(collection(db, "collections"), {
    name: name,
    userId: currentUser.uid,
  });
};
