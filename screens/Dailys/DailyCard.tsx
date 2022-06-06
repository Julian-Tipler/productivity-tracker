import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DailyCardRatingsBar } from "./DailyCardRatingsBar";
import { Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CategoriesContext, Daily } from "../../contexts/CategoriesContext";

export const DailyCard = ({
  daily,
  currentIndex,
  setCurrentIndex,
}: {
  daily: Daily;
  currentIndex: number;
  setCurrentIndex: Function;
}) => {
  const { createRating } = useContext(CategoriesContext) as any;
  const [selection, setSelection] = useState(null);

  const buttonSelected = selection!!;

  const handleSubmit = async () => {
    const input = {
      id: daily.id,
      value: String(selection),
    };

    setCurrentIndex(currentIndex + 1);
    setSelection(null);

    await createRating(input);
  };

  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.title}>{daily.name}</Card.Title>
      <Card.Divider />
      <DailyCardRatingsBar
        ratingParameter={daily.ratingParameter}
        selection={selection}
        setSelection={setSelection}
      />
      {buttonSelected && (
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text>Next Category</Text>
        </TouchableOpacity>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    backgroundColor: "gray",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownButtons: {
    flexDirection: "row",
  },
});
