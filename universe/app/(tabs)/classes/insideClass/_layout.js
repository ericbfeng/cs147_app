import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, Text, Button, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowIcon: false,
        tabBarButton: HapticTab,
        tabBarPosition: "top",
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: "#304674", // Active tab icon color
        tabBarStyle: {
          display: "flex",
        },
        tabBarLabelStyle: {
          fontFamily: "Outfit-SemiBold", // Replace with your desired font family
          fontSize: 12, // Optional: Customize font size
        },
      }}
    >
      <Tabs.Screen
        name="lessons"
        options={{
          title: "Lessons",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          title: "Students",
        }}
      />
    </Tabs>
  );
}
