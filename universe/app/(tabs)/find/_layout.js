import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide headers globally
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Recommended Students", // Title for the index screen
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: "Student Detail", // Title for the details screen
          headerShown: true, // Show header for the details screen
        }}
      />
    </Stack>
  );
}
