import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InsightProfile from "../../insight_profile";

const names = [
  ["Sarah", 100],
  ["John", 50],
  ["Liam", 30],
  ["Jack", 10],
];

// A single Insight component
const Insight = ({ name, backgroundColor, onPress }) => (
  <TouchableOpacity
    style={[styles.insight, { backgroundColor }]}
    onPress={() => onPress(name)}
  >
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
);

export default function Insights() {
  const [selectedName, setSelectedName] = useState(null); // State for selected name

  const handlePress = (name) => {
    setSelectedName(name);
  };

  const handleCloseProfile = () => {
    setSelectedName(null);
  };

  const sortedNames = [...names].sort((a, b) => b[1] - a[1]);
  const baseColor = [52, 93, 167]; // #345DA7
  const steps = sortedNames.length;

  const calculateGradientColor = (index) => {
    const factor = 1 - index / steps; // Decrease intensity as index increases
    const color = baseColor.map(
      (channel) => Math.round(channel * factor + 255 * (1 - factor)) // Blend toward white
    );
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AI Insights</Text>
      {/* Show the list of insights if no profile is selected */}
      {!selectedName &&
        sortedNames.map(([name, value], index) => (
          <Insight
            key={index}
            name={name}
            value={value}
            backgroundColor={calculateGradientColor(index)}
            onPress={handlePress}
          />
        ))}

      {/* Show the profile if a name is selected */}
      {selectedName && (
        <InsightProfile name={selectedName} onClose={handleCloseProfile} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  insight: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "80%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
