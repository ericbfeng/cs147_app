import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Theme from "../assets/theme";
import ImageAssets from "../assets/ImageAssets";

export default function StudentCard({ profile }) {

  const profileImage = ImageAssets[profile.profileImage];


  return (
    <View style={styles.card}>
      <View style={styles.topText}>
        <Text style={styles.studentName}>{profile.name}</Text>
        <View style={styles.similarContainer}>
          <Text style={styles.similarText}>Most similar student:</Text>
          <Text style={styles.similarText}>{profile.similarStudent}</Text>
        </View>
      </View>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.details}>
          <Text style={styles.label}>Academic Interests:</Text>{" "}
          {profile.academicInterests}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.label}>College targets:</Text>{" "}
          {profile.collegeTargets}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 30,
    backgroundColor: Theme.colors.lightPurple,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 1,
    elevation: 3,
  },
  topText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: "center",
  },
  studentName: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },
  similarContainer: {
    flexDirection: "column",
    gap: 0,
    alignItems: "flex-end",
  },
  similarText: {
    fontSize: 15,
    color: "#555",
    fontFamily: "Outfit",
  },
  details: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Outfit",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },
});
