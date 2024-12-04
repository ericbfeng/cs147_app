import { Stack, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";

export default function Layout() {
  const router = useRouter();
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
      }}
    >
      {/* Main Screen */}
      <Stack.Screen
        name="index"
        options={{
          title: "My Classes",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="insideClass"
        options={({ route }) => ({
          title: route.params?.headerTitle,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={32} color={"black"} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}
