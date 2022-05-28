import { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { Text, View } from "../../components/Themed";
import { Categories } from "./Categories";
import ZeroState from "./ZeroState";
import { AuthContext } from "../../contexts/AuthContext";
import { getCategories } from "../../api/Categories/getCategories"
import { RootTabScreenProps } from "../../types";

export type Category = {
  title: string;
  ratingParameter: string;
};

export default function RatingsScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const [selection, setSelection] = useState(null);
  const [categories, setCategories] = useState([]);

  const { currentUser } = useContext(AuthContext) as any;

  useEffect(() => {
    getCategories(setCategories, currentUser);
  }, []);

  return (
    <View style={styles.container}>
      {categories.length ? (
        <Categories
          categories={categories}
          selection={selection}
          setSelection={setSelection}
        />
      ) : (
        <ZeroState />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
