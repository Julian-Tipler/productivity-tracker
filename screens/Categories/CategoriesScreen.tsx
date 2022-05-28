import { useContext } from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { AuthContext } from "../../contexts/AuthContext";
import { RootTabScreenProps } from "../../types";

export default function CategoriesScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  const { currentUser } = useContext(AuthContext) as any;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category (edit, delete)</Text>
      <Text style={styles.title}>Category (edit, delete)</Text>
      <Text style={styles.title}>Plus Button (create)</Text>
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
