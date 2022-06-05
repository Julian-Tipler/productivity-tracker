import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title, Paragraph, Button } from "react-native-paper";

import { Text, View } from "../../components/Themed";
import { AuthContext } from "../../contexts/AuthContext";
import { CategoriesContext, Category } from "../../contexts/CategoriesContext";
import { RootStackParamList, RootTabScreenProps } from "../../types";
import { CategoryCard } from "./CategoryCard";

export function CategoriesScreen({ navigation }: RootTabScreenProps<"TabTwo">) {
  const { categories, getCategories, deleteCategory } = useContext(CategoriesContext) as any;

  useEffect(() => {
    getCategories();
  }, []);

  const renderCard = ({item}:{item:Category}) => {
    return (
      <CategoryCard category={item} key={`$category-${item.name}`} deleteCategory={deleteCategory}/>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
      ></FlatList>
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
  list: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
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
