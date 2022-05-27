import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function CategoriesScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
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
  button: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
