import { Stack, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  const router = useRouter();
  // const navigation = useNavigation();

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
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ paddingHorizontal: 10 }}
          >
            <Ionicons name="chevron-back" size={32} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      {/* Main Screen */}
      <Stack.Screen
        name="index"
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
    </Stack>
  );
}
