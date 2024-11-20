import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Replace with your authentication logic
    global.isLoggedIn = true; // Use a global variable for simplicity
    navigation.replace("(tabs)"); // Redirect to the main app
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});