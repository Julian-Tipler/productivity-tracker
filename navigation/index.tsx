/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LoginScreen from "../screens/Auth/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import GraphsScreen from "../screens/Graphs/GraphsScreen";
import RatingsScreen from "../screens/Ratings/RatingsScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { auth } from "../firebase/firebaseConfig";
import { HeaderLeft, HeaderRight } from "./Headers";
import { AuthContext } from "../contexts/AuthContext";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  const { currentUser } = React.useContext(AuthContext) as any;

  return (
    <Stack.Navigator>
      {!currentUser ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={RatingsScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Ratings",
          tabBarIcon: ({ color }) => <TabBarIcon name="check" color={color} />,
          headerRight: () => (
            <HeaderRight navigation={navigation} colorScheme={colorScheme} />
          ),
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
              colorScheme={colorScheme}
              action={handleSignOut}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
          headerRight: () => (
            <HeaderRight navigation={navigation} colorScheme={colorScheme} />
          ),
          headerLeft: () => (
            <HeaderLeft
              navigation={navigation}
              colorScheme={colorScheme}
              action={handleSignOut}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
