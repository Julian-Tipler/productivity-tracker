import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import { CategoryFormProvider } from "../../contexts/_CategoryFormContext";
import { GraphsScreen } from "./GraphsScreen";

const Stack = createNativeStackNavigator();

export const GraphsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"GraphsScreen"}
        component={GraphsScreen}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};
