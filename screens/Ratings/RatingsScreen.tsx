import { useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { Categories } from "./Categories";

export type Category = {
  title: String;
  quantity: number;
};

const categories: Category[] = [
  {
    title: "exercise",
    quantity: 5,
  },
  {
    title: "nofap",
    quantity: 4,
  },
];

export default function RatingsScreen() {
  const [selection, setSelection] = useState(null);

  console.log(selection);

  return (
    <View style={styles.container}>
      {categories.length > 0 ? (
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
