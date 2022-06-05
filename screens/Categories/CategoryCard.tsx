import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Category } from "../../contexts/CategoriesContext";
import { Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export const CategoryCard = ({
  category,
  deleteCategory,
}: {
  category: Category;
  deleteCategory: Function;
}) => {
  const { id, name, ratingParameter } = category;
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.title}>{name}</Card.Title>
      {detailsOpen ? (
        <>
          <Card.Divider />
          <Text>Rating Parameter: {ratingParameter}</Text>
          <TouchableOpacity onPress={() => deleteCategory({ id })}>
            <FontAwesome name="close" color="red" size={50} />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    backgroundColor: "orange",
  },
  title: {
    
  }
});
