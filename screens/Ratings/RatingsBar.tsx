import { StyleSheet, Text, View } from "react-native";
import React, { SetStateAction, useState } from "react";
import { Button } from "react-native-paper";
import { blue100 } from "react-native-paper/lib/typescript/styles/colors";

const RatingsBar = ({ quantity, selection, setSelection }: { quantity: Number, selection: Number | null, setSelection: Function }) => {

  const returnButtons = (number: Number) => {
    const buttons = [];
    for (let i = 1; i <= number; i++)
      buttons.push(
        <Button
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
        {returnButtons(quantity).map((button) => button)}
      </View>
    </>
  );
};

export default RatingsBar;

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
