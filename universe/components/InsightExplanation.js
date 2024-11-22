import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const insightDetails = {
  "Improve extracurricular activities": {
    priority: "High Priority",
    explanation: `Students who got into Sarah's target school have 3 extracurricular activities on average. Sarah currently has 1 extracurricular activity.`,
    importance: `Extracurricular activities enhance college applications by showcasing a student's interests, leadership, and commitment beyond academics.`,
  },
  "Refine Personal Statement": {
    priority: "Medium Priority",
    explanation: `Admissions officers value personal statements that are authentic and well-written. Sarah's statement needs refinement to better communicate her unique story.`,
    importance: `A compelling personal statement can differentiate Sarah from other applicants and highlight her strengths.`,
  },
  "Improve interview skills": {
    priority: "Low Priority",
    explanation: `Interview performance can be improved by practicing responses to common questions and demonstrating confidence.`,
    importance: `Strong interview skills can help Sarah leave a positive impression on admissions committees.`,
  },
};

export default function InsightExplanation({ action }) {
  const details = insightDetails[action];
  const router = useRouter();
  if (!details) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Explanation Found</Text>
        <Text style={styles.subtitle}>
          The explanation for "{action}" does not exist.
        </Text>
      </View>
    );
  }

  const handleActionPress = (insight) => {
    // console.log("Navigating to insightDetail with:", insight); // Debug the data
    router.push({
      pathname: "/insights/insightAction", // Adjust the path
      //   params: {
      //     priority: insight.priority,
      //     action: insight.action,
      //   },
    });
  };

  return (
    <View style={styles.container}>
      {/* Priority Header */}
      <View style={styles.priorityCard}>
        <Text style={styles.priority}>{details.priority}</Text>
        <Text style={styles.action}>{action}</Text>
      </View>

      {/* Explanation Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailsHeader}>Explanation</Text>
        <Text style={styles.detailsText}>{details.explanation}</Text>
        <Text style={styles.detailsText}>{details.importance}</Text>
      </View>

      {/* Recommended Actions */}
      <TouchableOpacity
        style={styles.recommendedButton}
        onPress={() => handleActionPress()}
      >
        <Text style={styles.recommendedText}>See recommended actions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  priorityCard: {
    backgroundColor: "#ECEFF7",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  priority: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#345DA7",
    marginBottom: 5,
  },
  action: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  detailsSection: {
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  recommendedButton: {
    backgroundColor: "#345DA7",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  recommendedText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
