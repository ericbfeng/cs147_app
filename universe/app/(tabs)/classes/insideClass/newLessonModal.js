import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

export default function Modal() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "New Lesson",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Modal screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
