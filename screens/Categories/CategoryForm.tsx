import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { CategoryFormContext } from "../../contexts/CategoryFormContext";
import { AuthContext } from "../../contexts/AuthContext";
import { RadioButton } from "react-native-paper";
import { Slider } from "@miblanchard/react-native-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import Navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { CategoriesContext } from "../../contexts/CategoriesContext";

type CategoryFormInput = {
  name: string;
  ratingParameter: string;
};

export const CategoryForm = () => {
  const { createCategory } = useContext(CategoriesContext) as any;
  const { currentUser } = useContext(AuthContext) as any;
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [ratingParameter, setRatingParameter] = useState<number | number[]>(1);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleSubmit = async () => {
    const input = {
      name,
      ratingParameter: String(ratingParameter),
    };
    const errors = validateCollection(input);
    if (errors) return setErrorMessages(errors);

    await createCategory(input);
    await setErrorMessages([]);
    navigation.navigate("CategoriesScreen" as any);
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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={setName}
        />
        <Text style={styles.title}>Rating Parameter</Text>
        <Slider
          value={ratingParameter}
          onValueChange={setRatingParameter}
          minimumValue={1}
          maximumValue={10}
          step={1}
        />
        <Text>{ratingParameter}</Text>
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={[styles.title, styles.button]}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Errors: {errorMessages}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#0782F9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
});
