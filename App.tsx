import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDrBQkgBTcm57mUXECgoMtP1DZavaocMtE",
  authDomain: "productivity-tracker-677a8.firebaseapp.com",
  projectId: "productivity-tracker-677a8",
  storageBucket: "productivity-tracker-677a8.appspot.com",
  messagingSenderId: "812052603151",
  appId: "1:812052603151:web:976e86d36b176cd23b5e7a",
  measurementId: "G-640G6KNS3G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
