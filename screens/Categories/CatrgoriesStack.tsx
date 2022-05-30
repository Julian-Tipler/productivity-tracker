import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./CategoriesScreen";
import { CategoryForm } from "./CategoryForm";

const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Categories Screen"} component={CategoriesScreen} />
      <Stack.Screen name={"Catefory Form"} component={CategoryForm} />
    </Stack.Navigator>
  );
};
