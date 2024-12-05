import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LessonItem({ lesson, onPress, showDelete, onDelete }) {
  return (
    <TouchableOpacity
      style={styles.lessonContainer}
      onPress={() => onPress(onPress)}
      activeOpacity={0.7}
    >
      <View style={styles.lessonHeader}>
        <View style={styles.lessonHeaderLeft}>
          <View>
            {lesson.occurred ? (
              <View style={styles.statusDotInactive} />
            ) : (
              <View style={styles.statusDotActive} />
            )}
          </View>

          <Text style={styles.lessonTitle}>{lesson.name}</Text>
        </View>
        <Text style={styles.lessonDate}>{lesson.date}</Text>
      </View>
      <Text style={styles.lessonDescription}>{lesson.description}</Text>
      <View style={styles.lessonHeader}>
        <View style={styles.zoomLinkContainer}>
          <Text style={styles.zoomLinkText}>Zoom Link: {lesson.zoomLink}</Text>
        </View>
        {showDelete && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={onDelete}
            activeOpacity={0.7}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lessonContainer: {
    padding: 16,
  },
  lessonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  lessonHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 8,
  },
  statusDotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#808080",
    marginRight: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Outfit",
  },
  lessonDate: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Outfit",
  },
  lessonDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    fontFamily: "Outfit",
  },
  zoomLinkContainer: {
    marginTop: 4,
  },
  zoomLinkText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Outfit",
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#EB4D3D",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "Outfit",
  },
});
