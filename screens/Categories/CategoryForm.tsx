import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { CategoryFormContext } from "../../contexts/CategoryFormContext";


export const CategoryForm = () => {
  const [name, setName] = useState("");
  const [ratingParameter, setRatingParameter] = useState("");

  const { } = useContext(CategoryFormContext) as any;
  
  return (
    <View>
      <Text>CategoryCreationForm</Text>
    </View>
  );
};
