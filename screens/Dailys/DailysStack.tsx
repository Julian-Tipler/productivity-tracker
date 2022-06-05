import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DailysScreen } from "./DailysScreen";

const Stack = createNativeStackNavigator();

export const DailysStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={"DailysScreen"} component={DailysScreen} />
      </Stack.Navigator>
  );
};
