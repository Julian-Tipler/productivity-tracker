import { StyleSheet } from "react-native";
import React from "react";
import { Category } from "../../contexts/CategoriesContext";
import { ListItem } from "@rneui/themed";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const GraphSelection = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: Category[];
  selectedCategory: number;
  setSelectedCategory: Function;
}) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category.id}
      renderItem={({ item, index }) => (
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <TouchableOpacity onPress={() => setSelectedCategory(index)}>
              <FontAwesome
                name="plus"
                color={selectedCategory === index ? "red" : "blue"}
                size={40}
              />
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      )}
    />
    // <View><Text>Hello</Text></View>
  );
};

export default GraphSelection;

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
});
