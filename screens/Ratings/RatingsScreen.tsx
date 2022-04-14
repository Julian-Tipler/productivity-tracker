import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";

import { Text, View } from "../../components/Themed";
import { Categories } from "./Categories";
import { db } from "../../firebase/firebaseConfig";

export type Category = {
  title: String;
  quantity: number;
};

// const categories: Category[] = [
//   {
//     title: "exercise",
//     quantity: 5,
//   },
//   {
//     title: "nofap",
//     quantity: 4,
//   },
// ];

async function getCategories(db: any, setCategories: any) {
  const q = query(collection(db, "category"));
  const snapshot = await getDocs(q);
  setCategories(snapshot.docs.map((doc) => doc.data()));
}

export default function RatingsScreen() {
  const [selection, setSelection] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(db, setCategories);
  });

  console.log(categories);

  return (
    <View style={styles.container}>
      {categories.length ? (
        <Categories
          categories={categories}
          selection={selection}
          setSelection={setSelection}
        />
      ) : (
        <View>
          <Text>You filled out all your categories for today!</Text>
        </View>
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
