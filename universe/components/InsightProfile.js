import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

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
    extracurricular: "Basketball Team Captain",
    gpa: "3.8",
    interests: "Team Sports, Strategy, Leadership",
    background: "Sports Leadership",
    class: "Class: Sports Leadership",
    insights: [
      {
        priority: "High Priority",
        action: "Enhance leadership skills in team sports",
      },
      {
        priority: "Medium Priority",
        action: "Focus on time management",
      },
      {
        priority: "Low Priority",
        action: "Improve public speaking abilities",
      },
    ],
  },
  "Liam O.": {
    extracurricular: "Robotics Club President",
    gpa: "4.0",
    interests: "Engineering, Problem Solving, Innovation",
    background: "STEM Leadership",
    class: "Class: Engineering and Robotics",
    insights: [
      {
        priority: "High Priority",
        action: "Develop advanced robotics projects",
      },
      {
        priority: "Medium Priority",
        action: "Strengthen teamwork and collaboration skills",
      },
      {
        priority: "Low Priority",
        action: "Attend engineering conferences and workshops",
      },
    ],
  },
  "Jack P.": {
    extracurricular: "Student Government President",
    gpa: "3.7",
    interests: "Leadership, Community Engagement, Public Policy",
    background: "Leadership in Community and Politics",
    class: "Class: Political Science and Leadership",
    insights: [
      {
        priority: "High Priority",
        action: "Strengthen leadership abilities in political campaigns",
      },
      {
        priority: "Medium Priority",
        action: "Engage in community outreach programs",
      },
      {
        priority: "Low Priority",
        action: "Improve debating skills",
      },
    ],
  },

  "Gill S.": {
    extracurricular: "Environmental Club Vice President",
    gpa: "3.8",
    interests: "Sustainability, Environmental Advocacy, Research",
    background: "Environmental Science Leadership",
    class: "Class: Environmental Studies and Advocacy",
    insights: [
      {
        priority: "High Priority",
        action: "Lead sustainability initiatives on campus",
      },
      {
        priority: "Medium Priority",
        action: "Improve environmental research skills",
      },
      {
        priority: "Low Priority",
        action: "Attend environmental policy workshops",
      },
    ],
  },

  "Samuel L.": {
    extracurricular: "Science Club President",
    gpa: "3.9",
    interests: "STEM, Research, Innovation",
    background: "STEM Leadership and Research",
    class: "Class: Science and Innovation",
    insights: [
      {
        priority: "High Priority",
        action: "Lead cutting-edge research projects",
      },
      {
        priority: "Medium Priority",
        action: "Enhance problem-solving skills in science",
      },
      {
        priority: "Low Priority",
        action: "Collaborate on scientific papers",
      },
    ],
  },

  "Doug T.": {
    extracurricular: "Theater Club Director",
    gpa: "3.6",
    interests: "Performing Arts, Directing, Public Speaking",
    background: "Theater Arts Leadership",
    class: "Class: Drama and Performing Arts",
    insights: [
      {
        priority: "High Priority",
        action: "Direct and produce a successful play",
      },
      {
        priority: "Medium Priority",
        action: "Enhance acting skills",
      },
      {
        priority: "Low Priority",
        action: "Attend drama workshops and masterclasses",
      },
    ],
  },

  "Jude P.": {
    extracurricular: "Music Club President",
    gpa: "3.8",
    interests: "Music Composition, Performance, Music Theory",
    background: "Music Leadership and Composition",
    class: "Class: Music Composition and Performance",
    insights: [
      {
        priority: "High Priority",
        action: "Compose and perform original music",
      },
      {
        priority: "Medium Priority",
        action: "Collaborate with other musicians",
      },
      {
        priority: "Low Priority",
        action: "Study advanced music theory",
      },
    ],
  },

  // Add more students here
};

const priorityColors = {
  "High Priority": "#304674", // Red for high priority
  "Medium Priority": "#8294C4", // Orange for medium priority
  "Low Priority": "#ACB1D6", // Green for low priority
};

export default function StudentProfile({ name }) {
  const details = studentDetails[name] || {};
  const router = useRouter();

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

  const handleInsightPress = (insight) => {
    console.log("Navigating to insightDetail with:", insight); // Debug the data
    router.push({
      pathname: "/insights/insightDetail", // Adjust the path
      params: {
        priority: insight.priority,
        action: insight.action,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Top Card */}
      <View style={styles.topCard}>
        <Image
          source={require("../assets/images/boy1.png")} // Replace with student avatar
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.class}>{details.class}</Text>
        <Text style={styles.info}>Background in {details.background}.</Text>
        <Text style={styles.info}>Interested in {details.interests}.</Text>
      </View>

      {/* AI Insights Section */}
      <Text style={styles.sectionTitle}>AI Insights</Text>
      {/* <View style={styles.iconRow}>
        <TouchableOpacity>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>≡</Text>
        </TouchableOpacity>
      </View> */}

      {details.insights.map((insight, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.insightCard,
            { backgroundColor: priorityColors[insight.priority] || "#345DA7" }, // Default to blue if no match
          ]}
          onPress={() => handleInsightPress(insight)} // Navigate when an insight is pressed
        >
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
    backgroundColor: "#DBDFEA",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 35,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    // fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
  },
  class: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#2C2C54",
    fontFamily: "Outfit",
  },
  info: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    fontFamily: "Outfit-Bold",
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
    marginBottom: 25,
    alignItems: "center",
  },
  priority: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
    fontFamily: "Outfit",
  },
  action: {
    fontSize: 14,
    color: "#EEE",
    textAlign: "center",
    fontFamily: "Outfit",
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
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Outfit",
  },
});
