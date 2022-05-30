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

export const createCategory = async (name: string, ratingParameter: string, currentUser: any) => {
  addDoc(collection(db, "collections"), {
    name: name,
    ratingParameter: ratingParameter,
    userId: currentUser.uid,
  });
};
