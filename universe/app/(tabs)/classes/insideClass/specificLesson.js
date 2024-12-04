import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function LessonDetailScreen() {
  const route = useRoute();
  const dataFinal = route.params.data;

  const handleLaunchZoom = () => {
    Alert.alert("Zoom Link", "https://fake.zoom.link/meeting123");
  };


  console.log("specific agenda: ", dataFinal.agenda);
  return (
    <ScrollView style={styles.container}>
      {/* Date Section */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Date:</Text>
        <Text style={styles.dateText}>{dataFinal.date}</Text>
      </View>

      {/* Agenda Section */}
      <View style={styles.agendaContainer}>
        <Text style={styles.agendaTitle}>Agenda:</Text>
        <View>
          {Object.keys(dataFinal).map((item, index) => (
            <Text key={index}>
              {"\u2022"} {item}
            </Text>
          ))}
        </View>
      </View>

      {/* Launch Zoom Button */}
      <TouchableOpacity style={styles.zoomButton} onPress={handleLaunchZoom}>
        <Text style={styles.zoomButtonText}>Launch Zoom</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  dateContainer: {
    backgroundColor: "#334173",
    padding: 20,
    borderRadius: 20,
    margin: 16,
  },
  dateLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  dateText: {
    color: "white",
    fontSize: 20,
    marginTop: 4,
  },
  agendaContainer: {
    backgroundColor: "#E8E9F1",
    padding: 20,
    borderRadius: 20,
    margin: 16,
  },
  agendaTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  topicContainer: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "flex-start",
  },
  subTopicContainer: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    marginTop: 2,
  },
  topicText: {
    fontSize: 16,
    flex: 1,
  },
  zoomButton: {
    margin: 16,
    marginTop: 0,
    padding: 20,
  },
  zoomButtonText: {
    fontSize: 16,
    color: "#334173",
    textDecorationLine: "underline",
  },
});
