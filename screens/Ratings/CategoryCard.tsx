import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import RatingsBar from "./RatingsBar";
import { Category } from "./RatingsScreen";

export const CategoryCard = ({ category }: { category: Category }) => {
  const [selection, setSelection] = useState(null);

  return (
    <View style={styles.categoryCard}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {category.title}</Text>
      </View>
      <View style={styles.graphicContainer}>
        <Text>
          ........................{category.title}{" "}
          graphic........................
        </Text>
      </View>
      <RatingsBar
        quantity={category.quantity}
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
