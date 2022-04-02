import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

type Rating = Number | 0;

const RatingsBar = ({ quantity }: { quantity: Number }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  return <View>{returnButtons(quantity).map(button => button)}</View>;
};

const returnButtons = (number: Number) => {
  const buttons = [];
  for (let i = 0; i < number; i++)
    buttons.push(
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    );
    return buttons
};

export default RatingsBar;

const styles = StyleSheet.create({});
