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
  ];

  const selectedDetails =
    namesWithDetails.find((item) => item.name === name) || {};
  const maxWeight =
    selectedDetails.details?.reduce(
      (max, item) => Math.max(max, item.weight),
      1
    ) || 1;

  const calculateColor = (weight, maxWeight) => {
    const intensity = weight / maxWeight; // Normalize the weight (0-1)
    const baseColor = [52, 93, 167]; // Base color (#345DA7)
    const color = baseColor.map(
      (channel) => Math.round(channel * intensity + 255 * (1 - intensity)) // Blend towards white
    );
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };

  const handleActionableItemPress = (actionableItem) => {
    setSelectedAction(actionableItem); // Set the selected actionable item
  };

  const handleBackToItems = () => {
    setSelectedAction(null); // Return to the list of actionable items
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onClose}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Top Box */}
      <View style={styles.topBox}>
        <Image
          source={require("../assets/images/logo.png")} // Replace with your image path
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>
          Class: {selectedDetails.className || "N/A"}
        </Text>
        <Text style={styles.info}>
          Background in {selectedDetails.background || "Unknown"}.
        </Text>
        <Text style={styles.info}>
          Interested in {selectedDetails.interests || "Various topics"}.
        </Text>
      </View>

      {/* Actionable Items or Selected Action */}
      {selectedAction ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Actionable Item:</Text>
          <Text style={styles.detailsText}>{selectedAction}</Text>
          <Text style={styles.detailsTitle}>Explanation:</Text>
          <Text style={styles.detailsText}>
            This is placeholder text for the explanation of the actionable item.
          </Text>
          <TouchableOpacity
            style={styles.backToItemsButton}
            onPress={handleBackToItems}
          >
            <Text style={styles.backToItemsText}>Back to Actionable Items</Text>
          </TouchableOpacity>
        </View>
      ) : (
        selectedDetails.details?.map(({ actionableItem, weight }, index) => (
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#345DA7",
    borderRadius: 5,
    zIndex: 1,
  },
  backText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  topBox: {
    backgroundColor: "#ECEFF7",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  actionButton: {
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
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
