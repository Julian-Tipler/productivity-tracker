import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const HeaderRight = ({
  navigation,
  colorScheme,
  action,
}: {
  navigation: any;
  colorScheme: string;
  action?: Function
}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Modal")}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesome
        name="info-circle"
        size={25}
        color={Colors[colorScheme].text}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

export const HeaderLeft = ({
  navigation,
  colorScheme,
  action,
}: {
  navigation: any;
  colorScheme: string;
  action?: Function
}) => {
  return (
    <Pressable
      onPress={() => action()}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesome
        name="anchor"
        size={25}
        color={Colors[colorScheme].text}
        style={{ marginLeft: 15 }}
      />
    </Pressable>
  );
};
