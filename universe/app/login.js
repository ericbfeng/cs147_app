import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ onLogin }) {
    return (
    <LinearGradient
        colors={["#3B88C3", "#345DA7", "#345DA7"]} // Gradient colors
        locations={[0.14, 0.63, 1.0]} // Gradient stops
        start={{ x: 0, y: 0 }} // Start of the gradient
        end={{ x: 0, y: 1 }} // End of the gradient
        style={styles.container} // Keep layout styling here
      >
         <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Log In" onPress={onLogin} />
          </View>
          <View style={styles.button}>
            <Button title="Sign Up" onPress={onLogin} />
          </View>
        </View>
    </LinearGradient>
    );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    logo: {
      width: 150, // Set the width of the logo
      height: 150, // Set the height of the logo
      marginBottom: 20, // Add spacing below the logo
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    buttonContainer: {
      width: "100%", // Ensure buttons align consistently
      alignItems: "center",
    },
    button: {
      width: 200, // Set consistent button width
      marginBottom: 10, // Add space between the buttons
    },
  });