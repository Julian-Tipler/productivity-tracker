import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import SwipeableCard from "./SwipeableCard";

export type Category = {
    title: String,
    quantity: Number,
}

const category:Category = {
  title: "exercise",
  quantity: 5
}

export default function RatingsScreen() {
  return (
    <View style={styles.container}>
      <SwipeableCard category={category}/>
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
