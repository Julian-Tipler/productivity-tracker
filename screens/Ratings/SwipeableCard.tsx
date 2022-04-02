import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import RatingsBar from "./RatingsBar";
import { Category } from "./RatingsScreen";

function SwipeableCard({ category }: { category: Category }) {
  return (
    <Card style={styles.categoryCard}>
      <Text style={styles.title}> {category.title}</Text>
      <RatingsBar quantity={category.quantity} />
    </Card>
  );
}

export default SwipeableCard;

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  categoryCard: {
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
