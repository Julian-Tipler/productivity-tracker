import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { AuthContext } from "../../contexts/AuthContext";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { RootStackParamList, RootTabScreenProps } from "../../types";
import { CategoryCard } from "./CategoryCard";

export type Category = {
  name: string;
  ratingParameter: string;
};

export function CategoriesScreen({ navigation }: RootTabScreenProps<"TabTwo">) {
  const { getCategories, categories, setCategories } = useContext(
    CategoriesContext
  ) as any;
  const { currentUser } = useContext(AuthContext) as any;

  useEffect(() => {
    getCategories(setCategories, currentUser);
  }, []);

  return (
    <View style={styles.container}>
      {categories.map((category: Category) => {
        return (
          <CategoryCard
            category={category}
            key={`$category-${category.name}`}
          />
        );
      })}
      <Text style={styles.title}>Plus Button (create)</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Root", {
            screen: "TabTwo",
            params: { screen: "CategoryForm" },
          } as any)
        }
      >
        <FontAwesome name="plus" color="red" size={50} />
      </TouchableOpacity>
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
