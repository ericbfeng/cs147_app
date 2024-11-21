import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function InsightProfile({ name, onClose }) {

  const namesWithDetails = [
    {
      name: "Sarah",
      profile: "../assets/images/logo.png",
      details: [
        { weight: 40, actionableItem: "Improve extracurricular activities" },
        { weight: 35, actionableItem: "Enhance academic performance" },
        { weight: 25, actionableItem: "Write a compelling personal essay" },
      ],
    },
    {
      name: "John",
      profile: "../assets/images/logo.png",
      details: [
        { weight: 20, actionableItem: "Join community service programs" },
        { weight: 15, actionableItem: "Seek leadership roles in clubs" },
        { weight: 15, actionableItem: "Participate in academic competitions" },
      ],
    },
    {
      name: "Liam",
      profile: "../assets/images/logo.png",
      details: [
        { weight: 15, actionableItem: "Attend college prep workshops" },
        { weight: 10, actionableItem: "Secure strong recommendation letters" },
        { weight: 5, actionableItem: "Polish interview skills" },
      ],
    },
    {
      name: "Jack",
      profile: "../assets/images/logo.png",
      details: [
        { weight: 5, actionableItem: "Research scholarship opportunities" },
        { weight: 3, actionableItem: "Prepare for standardized tests" },
        { weight: 2, actionableItem: "Refine application portfolio" },
      ],
    },
  ];

  // Find the details for the selected name
  const selectedDetails =
    namesWithDetails.find((item) => item.name === name)?.details || [];
  const maxWeight = selectedDetails.reduce((max, item) => Math.max(max, item.weight), 1);

  const calculateColor = (weight, maxWeight) => {
        const intensity = weight / maxWeight; // Normalize the weight (0-1)
        const baseColor = [52, 93, 167]; // Base color (#345DA7)
        const color = baseColor.map((channel) =>
          Math.round(channel * intensity + 255 * (1 - intensity)) // Blend towards white
        );
        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };

  const handlePress = (actionableItem) => {
        alert(`Selected: ${actionableItem}`);
      };

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onClose}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.profileText}>Profile: {name}</Text>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      {selectedDetails.map(({ actionableItem, weight }, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.actionButton,
            { backgroundColor: calculateColor(weight, maxWeight) },
          ]}
          onPress={() => handlePress(actionableItem)}
        >
          <Text style={styles.actionText}>{actionableItem}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: "90%",
  },
  profileText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  actionButton: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#345DA7",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  logo: {
    width: 150, // Set the width of the logo
    height: 150, // Set the height of the logo
    marginBottom: 20, // Add spacing below the logo
    backgroundColor: "#345DA7"
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#345DA7",
    borderRadius: 5,
  },
  backText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
