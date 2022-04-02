import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { blue100 } from "react-native-paper/lib/typescript/styles/colors";

type Rating = Number | 0;

const RatingsBar = ({ quantity }: { quantity: Number }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <View style={styles.buttonsContainer}>
      {returnButtons(quantity).map((button) => button)}
    </View>
  );
};

const returnButtons = (number: Number) => {
  const buttons = [];
  for (let i = 0; i < number; i++)
    buttons.push(
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        P
      </Button>
    );
  return buttons;
};

export default RatingsBar;

const styles = StyleSheet.create({
  buttonsContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  button: {
    height: 40,
    width: 20,
    backgroundColor: "orange",
  },
});
