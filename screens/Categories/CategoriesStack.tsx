import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryFormProvider } from "../../contexts/CategoryFormContext";
import { CategoriesScreen } from "./CategoriesScreen";
import { CategoryForm } from "./CategoryForm";

const Stack = createNativeStackNavigator();

export const CategoriesStack = () => {
  return (
    <CategoryFormProvider>
      <Stack.Navigator>
        <Stack.Screen name={"CategoriesScreen"} component={CategoriesScreen} />
        <Stack.Screen name={"CategoryForm"} component={CategoryForm} />
      </Stack.Navigator>
    </CategoryFormProvider>
  );
};
