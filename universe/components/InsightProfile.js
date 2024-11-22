import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const studentDetails = {
  "Sarah W.": {
    extracurricular: "Debate Team Captain",
    gpa: "3.9",
    interests: "Public Speaking, Leadership",
    background: "Extracurricular Activities",
    class: "Class: Extracurricular Activities",
    insights: [
      {
        priority: "High Priority",
        action: "Improve extracurricular activities",
      },
      { priority: "Medium Priority", action: "Refine Personal Statement" },
      { priority: "Low Priority", action: "Improve interview skills" },
    ],
  },
  "John L.": {
    extracurricular: "Basketball Team",
    gpa: "3.6",
    interests: "Sports, Teamwork",
    background: "Athletics",
    class: "Class: Athletics",
    insights: [
      { priority: "High Priority", action: "Focus on GPA improvement" },
      {
        priority: "Medium Priority",
        action: "Join community service programs",
      },
    ],
  },
  // Add more students here
};

export default function StudentProfile({ name }) {
  const details = studentDetails[name] || {};

  if (!details.background) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Profile Found</Text>
        <Text style={styles.subtitle}>
          The profile for "{name}" does not exist.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Card */}
      <View style={styles.topCard}>
        <Image
          source={require("../assets/images/logo.png")} // Replace with student avatar
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.class}>{details.class}</Text>
        <Text style={styles.info}>Background in {details.background}.</Text>
        <Text style={styles.info}>Interested in {details.interests}.</Text>
      </View>

      {/* AI Insights Section */}
      <Text style={styles.sectionTitle}>AI Insights</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>≡</Text>
        </TouchableOpacity>
      </View>

      {details.insights.map((insight, index) => (
        <TouchableOpacity key={index} style={styles.insightCard}>
          <Text style={styles.priority}>{insight.priority}</Text>
          <Text style={styles.action}>{insight.action}</Text>
        </TouchableOpacity>
      ))}

      {/* Student Materials Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.bottomText}>Student Materials</Text>
        <TouchableOpacity>
          <Text style={styles.icon}>⇅</Text>
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
    width: "100%",
  },
  topCard: {
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
  class: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#2C2C54",
  },
  info: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2C2C54",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#345DA7",
    marginLeft: 10,
  },
  insightCard: {
    backgroundColor: "#345DA7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  priority: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  action: {
    fontSize: 14,
    color: "#EEE",
    textAlign: "center",
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ECEFF7",
  },
  bottomText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C2C54",
  },
});
