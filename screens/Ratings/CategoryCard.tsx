import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { CategoryCardRatingsBar } from "./CategoryCardRatingsBar";
import { Category } from "./RatingsScreen";

export const CategoryCard = ({
  category,
  selection,
  setSelection,
}: {
  category: Category;
  selection: number | null;
  setSelection: Function;
}) => {
  return (
    <View style={styles.categoryCard}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {category.title}</Text>
      </View>
      <View style={styles.graphicContainer}>
        <Text>
          ........................{category.title}
          graphic........................
        </Text>
      </View>
      <CategoryCardRatingsBar
        ratingParameter={category.ratingParameter}
        selection={selection}
        setSelection={setSelection}
      />
    </View>
  );
};

const onSwipe = () => {};

const styles = StyleSheet.create({
  categoryCard: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  graphicContainer: {
    flex: 3,
    backgroundColor: "purple",
  },
});
