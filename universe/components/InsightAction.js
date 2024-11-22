import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function InsightAction({ priority, action, recommendation }) {
  const router = useRouter();
  const handleSendPress = (insight) => {
    // console.log("Navigating to insightDetail with:", insight); // Debug the data
    router.push({
      pathname: "/insights/insightSend", // Adjust the path
      //   params: {
      //     priority: insight.priority,
      //     action: insight.action,
      //   },
    });
  };
  return (
    <View style={styles.container}>
      {/* Back Button
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => console.log("Go Back")}
      >
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity> */}

      {/* Priority and Action Header */}
      <View style={styles.priorityCard}>
        <Text style={styles.priority}>{priority}</Text>
        <Text style={styles.action}>{action}</Text>
      </View>

      {/* Recommended Actions */}
      <Text style={styles.recommendationHeader}>Recommended Actions</Text>
      <View style={styles.recommendationCard}>
        <Text style={styles.recommendationTitle}>{recommendation.title}</Text>
        <Text style={styles.recommendationText}>{recommendation.details}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText} onPress={() => handleSendPress()}>
            Send to student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>See next action</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 18,
    color: "#345DA7",
    marginRight: 5,
  },
  backText: {
    fontSize: 16,
    color: "#345DA7",
    fontWeight: "bold",
  },
  priorityCard: {
    backgroundColor: "#345DA7",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  priority: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  action: {
    fontSize: 16,
    color: "#EEE",
    textAlign: "center",
  },
  recommendationHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
  },
  recommendationCard: {
    backgroundColor: "#ECEFF7",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C2C54",
    marginBottom: 10,
  },
  recommendationText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#345DA7",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
