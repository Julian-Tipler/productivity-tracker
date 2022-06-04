import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DailyCardRatingsBar } from "./DailyCardRatingsBar";
import { Rating, DailysContext } from "../../contexts/RatingsContext";
import { Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

export const DailyCard = ({
  rating,
  currentIndex,
  setCurrentIndex,
}: {
  rating: Rating;
  currentIndex: number;
  setCurrentIndex: Function;
}) => {
  const { createRating } = useContext(DailysContext) as any;
  const [selection, setSelection] = useState(null);

  const buttonSelected = selection!!;

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
    <View style={styles.cardContainer}>
      <Card>
        <Card.Title>{rating.name}</Card.Title>
        <Card.Divider />
        <DailyCardRatingsBar
          ratingParameter={rating.ratingParameter}
          selection={selection}
          setSelection={setSelection}
        />
      </Card>
      {buttonSelected && (
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text>Next Category</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const onSwipe = () => {};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
  },
  graphicContainer: {
    flex: 3,
    backgroundColor: "purple",
  },
});
