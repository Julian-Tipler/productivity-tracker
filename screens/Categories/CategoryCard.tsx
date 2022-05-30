import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Category } from "./CategoriesScreen";
import { Card } from "@rneui/themed";

export const CategoryCard = ({ category }: { category: Category }) => {
  console.log(category);
  const { name, ratingParameter } = category;
  console.log(ratingParameter)
  return (
    <View>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Divider />
        <Text>{ratingParameter}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({

})