import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import Theme from "../../assets/theme";

const DATA = [
  {
    id: "1",
    name: "Jack L.",
    similarStudent: "Jarod W.",
    academicInterests: "Math, History, Art",
    collegeTargets: "Stanford, Williams, Tufts",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: "2",
    name: "Jane D.",
    similarStudent: "Emily H.",
    academicInterests: "Biology, Chemistry, Literature",
    collegeTargets: "Harvard, Princeton, Yale",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  // Add more student data as needed
];

export default function RecommendedStudents() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.studentName}>{item.name}</Text>
        <Text style={styles.similarText}>
          Most similar student: {item.similarStudent}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.label}>Academic Interests:</Text>{" "}
          {item.academicInterests}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.label}>College targets:</Text>{" "}
          {item.collegeTargets}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <Text style={styles.header}>Recommended Students</Text>

      {/* Student List */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navIcon}>🔍</Text>
        <Text style={styles.navIcon}>📚</Text>
        <Text style={styles.navIcon}>🎓</Text>
        <Text style={styles.navIcon}>👤</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  flatList: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: Theme.colors.lightPurple,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: "center",
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  similarText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  navIcon: {
    fontSize: 24,
    color: "#555",
  },
});
