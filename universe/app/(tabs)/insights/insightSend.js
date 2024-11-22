import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function PopupScreen() {
  const router = useRouter();
  const handleSendPress = () => {
    Alert.alert(
      "Message Sent", // Title
      "Your message has been successfully sent.", // Message
      [
        {
          text: "OK",
          onPress: () => router.back(), // Navigate back to the previous page
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.message}>
          Hi Sarah, I think it would be really helpful if you do some
          extracurriculars.{"\n\n"}
          Joining the debate team is a great option because it can help with
          your public speaking and improve your capacity to engage with topics
          outside your comfort zone!{"\n\n"}
          Let’s schedule a meeting to discuss more about this!
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()} // Close popup
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.sendButton]}
            onPress={handleSendPress} // Show the alert
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: Dimensions.get("window").width * 0.9, // Responsive width
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  message: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  sendButton: {
    backgroundColor: "#345DA7",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
