import { Stack, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
<<<<<<< Updated upstream
import { TouchableOpacity, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  const router = useRouter();
  // const navigation = useNavigation();
=======
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataProvider } from "./DataContext";
import MyTabs from "./insideClass/topNav";
import { useLocalSearchParams } from "expo-router";

export default function Layout() {
  const router = useRouter();
  const navigation = useNavigation();
  const { classroomID, headerTitle } = useLocalSearchParams();
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
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
          name="insideClass/topNav"
          options={({ route }) => ({
            title: route.params.headerTitle,
            headerTitleAlign: "center",
          })}
        />
        {/*
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
        */}
      </Stack>
    </DataProvider>
>>>>>>> Stashed changes
  );
}
