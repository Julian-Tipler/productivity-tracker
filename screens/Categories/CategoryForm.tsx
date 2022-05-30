import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { CategoryFormContext } from "../../contexts/CategoryFormContext";
import { AuthContext } from "../../contexts/AuthContext";


export const CategoryForm = () => {
  const [name, setName] = useState("");
  const [ratingParameter, setRatingParameter] = useState("");

  const { currentUser } = useContext(AuthContext) as any;

  const { createCategory } = useContext(CategoryFormContext) as any;
  
  return (
    <View>
      <Text>CategoryCreationForm</Text>
    </View>
  );
};
