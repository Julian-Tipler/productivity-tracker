import { StyleSheet, Text, View } from "react-native";
import React, { SetStateAction, useState } from "react";
import { Button } from "react-native-paper";
import { blue100 } from "react-native-paper/lib/typescript/styles/colors";
import { auth } from "../../firebase/firebaseConfig";

export const CategoryCardRatingsBar = ({
  ratingParameter,
  selection,
  setSelection,
}: {
  ratingParameter: string;
  selection: Number | null;
  setSelection: Function;
}) => {
  const returnButtons = (ratingParameter:string) => {
    const buttons = [];
    for (let i = 1; i <= Number(ratingParameter); i++)
      buttons.push(
        <Button
          key={`button${i}`}
          style={[styles.button, selection === i && styles.selected]}
          mode="contained"
          onPress={() => setSelection(i)}
        >
          {i}
        </Button>
      );
    return buttons;
  };

  return (
    <>
      <View style={styles.buttonsContainer}>
        {returnButtons(ratingParameter).map((button) => button)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  button: {
    height: 40,
    width: 20,
    backgroundColor: "orange",
  },
  selected: {
    backgroundColor: "blue",
  },
});
