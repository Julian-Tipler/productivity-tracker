import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { AuthContext } from "../../contexts/AuthContext";
import {
  CategoryFormContext,
  CategoryFormProvider,
} from "../../contexts/CategoryFormContext";
import { RootStackParamList, RootTabScreenProps } from "../../types";



export default function CategoriesScreen({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  const { currentUser } = useContext(AuthContext) as any;

  return (
    <CategoryFormProvider>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <FontAwesome name="plus" color="red" size={50} />
        </TouchableOpacity>
        <Text style={styles.title}>Category (edit, delete)</Text>
        <Text style={styles.title}>Category (edit, delete)</Text>
        <Text style={styles.title}>Plus Button (create)</Text>
      </View>
    </CategoryFormProvider>
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
