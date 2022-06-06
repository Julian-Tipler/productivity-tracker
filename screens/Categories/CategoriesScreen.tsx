import { FontAwesome } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { View } from "../../components/Themed";
import { CategoriesContext, Category } from "../../contexts/CategoriesContext";
import { RootTabScreenProps } from "../../types";
import { CategoryCard } from "./CategoryCard";

export function CategoriesScreen({ navigation }: RootTabScreenProps<"TabTwo">) {
  const { categories, getCategories, deleteCategory } = useContext(
    CategoriesContext
  ) as any;

  useEffect(() => {
    getCategories();
  }, []);

  const renderCard = ({ item }: { item: Category }) => {
    return (
      <CategoryCard
        category={item}
        key={`$category-${item.name}`}
        deleteCategory={deleteCategory}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Root", {
              screen: "TabTwo",
              params: { screen: "CategoryForm" },
            } as any)
          }
        >
          <FontAwesome name="plus" color="blue" size={40} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingRight: 15,
  },
  list: {
    width: "100%",
    alignItems: "stretch",
    justifyContent: "flex-start",
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
