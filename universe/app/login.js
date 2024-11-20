import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ onLogin, onSignUp }) { 
     // Local state to simulate login
    const [isStudent, setIsStudent] = useState(null); // Local state to simulate login
    return (
    <LinearGradient
        colors={["#3B88C3", "#345DA7", "#345DA7"]} // Gradient colors
        locations={[0.14, 0.63, 1.0]} // Gradient stops
        start={{ x: 0, y: 0 }} // Start of the gradient
        end={{ x: 0, y: 1 }} // End of the gradient
        style={styles.container} // Keep layout styling here
      >
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        
        {isStudent === null ? (
            <>
             <Text style={styles.title}>Choose Your Profile!</Text>
             <View style={styles.buttonContainer}>
             <TouchableOpacity style={styles.customButton} onPress={() => setIsStudent(false)}>
                 <Text style={styles.customButtonText}>Counselor</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.customButton} onPress={() => setIsStudent(true)}>
                 <Text style={styles.customButtonText}>Student</Text>
             </TouchableOpacity>
             </View>
             </>
        ) :
        (
            <>
            <Text style={styles.title}>Welcome {isStudent? "Student": "Counsoler" }!</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.customButton} onPress={() => onLogin()}>
                <Text style={styles.customButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton} onPress={() => onSignUp()}>
                <Text style={styles.customButtonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            </>
        ) };
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
      color: "white"
    },
    buttonContainer: {
      width: "100%", // Ensure buttons align consistently
      alignItems: "center",
    },

    customButton: {
        backgroundColor: "#E2E8F0",
        padding: 15,
        borderRadius: 5,
        width: 200,
        alignItems: "center",
        marginBottom: 10,
      },
      customButtonText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "bold",
      },
  });