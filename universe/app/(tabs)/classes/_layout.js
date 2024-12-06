import { Stack, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  const router = useRouter();
  const navigation = useNavigation();
  /*
  const parentNavigation = navigation.getParent();
  // console.log(parentNavigation);

  const getRouteNames = () => {
    if (parentNavigation.getState() && parentNavigation.getState().routes) {
      return parentNavigation.getState().routes.map((route) => route.name);
    }
    return [];
  };

  const testing123 = () => {
    return (
      <View>
        {getRouteNames().map((routeName) => (
          <Text key={routeName}>{routeName}</Text>
        ))}
      </View>
    );
  };

  console.log("HELLO!!!: ", testing123());
  */

  return (
    <Stack
      screenOptions={{
        headerShown: true, // Ensure headers are visible for navigation
        headerStyle: {
          backgroundColor: "white", // Customize the header background color
        },
        headerTintColor: "black", // Arrow and text color
        headerTitleStyle: {
          fontFamily: "Outfit-Bold",
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
        },
        headerBackTitle: "Back", // Explicitly remove back button text
        headerBackTitleStyle: {
          fontFamily: "Outfit",
        },
        //headerLeft: () => navigation.navigate("index"),
      }}
    >
      {/* Main Screen */}
      <Stack.Screen
        name="classes"
        options={{
          title: "My Classes",
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="insideClass/lessons"
        options={{
          title: "My Lessons",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="insideClass/specificLesson"
        options={{
          title: "Lesson Details",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="insideClass/students"
        options={{
          title: "Student List",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="newLessonModal"
        options={{
          presentation: "modal",
          title: "New Lesson",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="newStudentModal"
        options={{
          presentation: "modal",
          title: "Add Student",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
