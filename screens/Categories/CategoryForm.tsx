import { View, Text, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { CategoryFormContext } from "../../contexts/CategoryFormContext";
import { AuthContext } from "../../contexts/AuthContext";
import { RadioButton } from "react-native-paper";

export const CategoryForm = () => {
  const { createCategory } = useContext(CategoryFormContext) as any;
  const { currentUser } = useContext(AuthContext) as any;

  const [name, setName] = useState("");
  const [ratingParameter, setRatingParameter] = useState("");

  console.log(ratingParameter);

  return (
    <View>
      <TextInput placeholder="name" />
      <RadioButton.Group
        onValueChange={(newValue) => setRatingParameter(newValue)}
        value={ratingParameter}
      >
        <View>
          <Text>True/False</Text>
          <RadioButton value="True/False" />
        </View>
        <View>
          <Text>Scale</Text>
          <RadioButton value="Scale" />
        </View>
      </RadioButton.Group>
    </View>
  );
};
