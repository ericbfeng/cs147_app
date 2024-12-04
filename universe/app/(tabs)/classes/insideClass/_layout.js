import { Tabs } from "expo-router";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

export default function TabsLayout() {
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          height: 45, // Make this header smaller than main header
        },
      }}
    >
      <Tabs.Screen
        name="lessons"
        options={{
          title: "",
          header: () => (
            <View style={styles.tabHeader}>
              <Text style={styles.tabText}>Lessons | </Text>
              <Link href="/(tabs)/classes/insideClass/students">
                <Text style={[styles.tabText, { color: "#BAC1CD" }]}>
                  Students
                </Text>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          title: "",
          header: () => (
            <View style={styles.tabHeader}>
              <Link href="/(tabs)/classes/insideClass/lessons">
                <Text style={[styles.tabText, { color: "#BAC1CD" }]}>
                  Lessons
                </Text>
              </Link>

              <Text style={styles.tabText}> | Students</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="specificLesson"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
