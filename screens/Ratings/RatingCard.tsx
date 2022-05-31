import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { RatingCardRatingsBar } from "./RatingCardRatingsBar";
import { Rating, RatingsContext } from "../../contexts/RatingsContext";

export const RatingCard = ({
  rating,
  selection,
  setSelection,
  currentIndex,
  setCurrentIndex,
}: {
  rating: Rating;
  selection: number | null;
  setSelection: Function;
  currentIndex: number;
  setCurrentIndex: Function;
}) => {
  const { createRating } = useContext(RatingsContext) as any;

  const handleSubmit = async () => {
    const input = {
      id: rating.id,
      value: String(selection),
    };

    setCurrentIndex(currentIndex + 1);
    setSelection(null);

    await createRating(input);
  };

  return (
    <View style={styles.categoryCard}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {rating.name}</Text>
      </View>
      <View style={styles.graphicContainer}>
        <Text>
          ........................{rating.name}
          graphic........................
        </Text>
      </View>
      <RatingCardRatingsBar
        ratingParameter={rating.ratingParameter}
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
