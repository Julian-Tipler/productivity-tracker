import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Category } from '../../contexts/CategoriesContext'
import { Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export const CategoryCard = ({ category, deleteCategory }: { category: Category, deleteCategory: Function }) => {
  const { id, name, ratingParameter } = category;

  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Divider />
        <Text>Rating Parameter: {ratingParameter}</Text>
        <TouchableOpacity
          onPress={() =>
            deleteCategory({id})
          }
        >
          <FontAwesome name="close" color="red" size={50} />
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%"
  }
})