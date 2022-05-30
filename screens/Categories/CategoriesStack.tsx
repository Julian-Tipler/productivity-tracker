import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import { CategoryFormProvider } from "../../contexts/CategoryFormContext";
import { CategoriesScreen } from "./CategoriesScreen";
import { CategoryForm } from "./CategoryForm";

const Stack = createNativeStackNavigator();

export const CategoriesStack = () => {
  return (
    <CategoryFormProvider>
      <CategoriesProvider>
        <Stack.Navigator>
          <Stack.Screen
            name={"CategoriesScreen"}
            component={CategoriesScreen}
          />
          <Stack.Screen name={"CategoryForm"} component={CategoryForm} />
        </Stack.Navigator>
      </CategoriesProvider>
    </CategoryFormProvider>
  );
};
