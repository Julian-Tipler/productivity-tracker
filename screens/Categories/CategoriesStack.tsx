import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import { CategoryFormProvider } from "../../contexts/_CategoryFormContext";
import { CategoriesScreen } from "./CategoriesScreen";
import { CategoryForm } from "./CategoryForm";

const Stack = createNativeStackNavigator();

export const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"CategoriesScreen"}
        component={CategoriesScreen}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name={"CategoryForm"}
        component={CategoryForm}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};
