import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import InsightProfile from "../../insight_profile";

const insightsData = [
  { name: "Sarah" },
  { name: "John" },
  { name: "Liam" },
  { name: "Jack" },
];

const InsightInitial = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (name) => {
    setSelectedProfile(name); // Set the selected profile
  };

  const handleCloseProfile = () => {
    setSelectedProfile(null); // Close the profile view
  };

  return (
    <View style={styles.container}>
      {/* Show the list of insights if no profile is selected */}
      {selectedProfile ? (
        <InsightProfile name={selectedProfile} onClose={handleCloseProfile} />
      ) : (
        <ScrollView>
          <Text style={styles.title}>AI Insights</Text>
          {insightsData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.insightCard}
              onPress={() => handleProfileSelect(item.name)}
            >
              <Text style={styles.insightText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  insightCard: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#ECEFF7",
    borderRadius: 10,
    alignItems: "center",
  },
  insightText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#345DA7",
  },
});

export default InsightInitial;
