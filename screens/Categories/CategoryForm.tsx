import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { CategoryFormContext } from "../../contexts/CategoryFormContext";
import { AuthContext } from "../../contexts/AuthContext";
import { RadioButton } from "react-native-paper";
import { Slider } from "@miblanchard/react-native-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import Navigation from "../../navigation";

type CategoryFormInput = {
  name: string;
  ratingParameter: string;
  currentUser: any;
};

export const CategoryForm = () => {
  const { createCategory } = useContext(CategoryFormContext) as any;
  const { currentUser } = useContext(AuthContext) as any;

  const [name, setName] = useState("");
  const [ratingParameter, setRatingParameter] = useState<number | number[]>(1);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleSubmit = async() => {
    const input = {
      name,
      ratingParameter: String(ratingParameter),
      currentUser,
    };
    const errors = validateCollection(input);
    if (errors) return setErrorMessages(errors);

    await createCategory(input);
    await setErrorMessages([]);
    Navigation.navigate("")
  };

  const validateCollection = ({ name }: CategoryFormInput) => {
    const errors: string[] = [];

    //name
    if (!name.length) {
      errors.push("You must provide a name");
    }

    if (errors.length) return errors;
    return false;
  };

  return (
    <View>
      <TextInput placeholder="name" onChangeText={setName} />
      <Slider
        value={ratingParameter}
        onValueChange={setRatingParameter}
        minimumValue={1}
        maximumValue={10}
        step={1}
      />
      <Text>{ratingParameter}</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>submit</Text>
      </TouchableOpacity>
      <Text>Errors: {errorMessages}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
