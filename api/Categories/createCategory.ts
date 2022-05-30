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

export const createCategory = async ({
  name,
  ratingParameter,
  currentUser,
}: {
  name: string;
  ratingParameter: string;
  currentUser: any;
}) => {
  addDoc(collection(db, "categories"), {
    name: name,
    ratingParameter: ratingParameter,
    userId: currentUser.uid,
  });
};
