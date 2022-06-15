import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";


const firebaseConfig = {
  apiKey: "AIzaSyDrBQkgBTcm57mUXECgoMtP1DZavaocMtE",
  authDomain: "productivity-tracker-677a8.firebaseapp.com",
  projectId: "productivity-tracker-677a8",
  storageBucket: "productivity-tracker-677a8.appspot.com",
  messagingSenderId: "812052603151",
  appId: "1:812052603151:web:976e86d36b176cd23b5e7a",
  measurementId: "G-640G6KNS3G",
};

app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };

export const db = getFirestore(app)
