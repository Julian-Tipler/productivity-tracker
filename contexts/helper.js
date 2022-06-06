import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  Timestamp,
} from "firebase/firestore";

export const handleSignUp = () =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {

    });

export const handleLogin = () =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const getStartOfToday = () => {
  const now = new Date();
  now.setHours(4, 0, 0, 0); // +4 hours for Central Time
  const timestamp = Timestamp.fromDate(now);
  return timestamp; // ex. 1631246400
};
