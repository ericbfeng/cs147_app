import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function InsightProfile({ name, onClose }) {
  const [selectedAction, setSelectedAction] = useState(null); // Track selected actionable item

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

  const handleActionableItemPress = (actionableItem) => {
    setSelectedAction(actionableItem); // Set the selected actionable item
  };

  const handleBackToItems = () => {
    setSelectedAction(null); // Return to the list of actionable items
  };


  const handleRecommendedItems = () => {
    alert("THIS IS A PLACEHOLDER CONTINUE FROM HERE") // Return to the list of actionable items
  };

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={styles.backButton} onPress={selectedAction ? handleBackToItems : onClose}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.profileText}>Profile: {name}</Text>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      {selectedAction ? (
        // Render details of the selected actionable item
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Actionable Item:</Text>
          <Text style={styles.detailsText}>{selectedAction}</Text>
          <Text style={styles.detailsTitle}>Explination:</Text>
          <Text style={styles.detailsText}> this is placeholder text...</Text>
          <TouchableOpacity style={styles.backToItemsButton} onPress={handleRecommendedItems}>
            <Text style={styles.backToItemsText}>See recommended actions</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Render the list of actionable items
        selectedDetails.map(({ actionableItem, weight }, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.actionButton,
              { backgroundColor: calculateColor(weight, maxWeight) },
            ]}
            onPress={() => handleActionableItemPress(actionableItem)}
          >
            <Text style={styles.actionText}>{actionableItem}</Text>
          </TouchableOpacity>
        ))
      )}
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
    width: 150,
    height: 150,
    marginBottom: 20,
    backgroundColor: "#345DA7",
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
  detailsContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    width: "100%",
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  backToItemsButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#345DA7",
    borderRadius: 5,
  },
  backToItemsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
