import { FontAwesome } from "@expo/vector-icons";
import { useContext, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
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
      <FlatList
        data={categories}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
        ListFooterComponent={() => (
          <View style={styles.newCategory}>
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
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newCategory: {
    alignItems: "center",
    padding: 15,
  },
  list: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingBottom: 15,
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
