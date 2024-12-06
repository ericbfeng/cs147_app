import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Theme from "../../../../assets/theme";
import { useData } from "../DataContext";
import { useRouter } from "expo-router"; // Use useRouter for navigation

const NewLesson = () => {
  // const [submittedData, setSubmittedData] = useState(null);
  const [title, setTitle] = useState("");
  const [zoom, setZoom] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [agenda, setAgenda] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const { lessons, addLesson } = useData();
  const router = useRouter();

  const handleSubmit = () => {
    const newData = {
      id: Date.now().toString(),
      name: "Lesson #5",
      description: title,
      zoomLink: zoom,
      date: date,
      agenda: agenda,
    };
    addLesson(newData);
    router.back();
  };

  useEffect(() => {
    navigation.setOptions({
      title: "Add Lesson",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={date}
          onChangeText={setDate}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Duration</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={duration}
          onChangeText={setDuration}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Zoom Link</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={zoom}
          onChangeText={setZoom}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Agenda</Text>
        <TextInput
          style={[styles.input, styles.agendaInput]}
          placeholder=""
          value={agenda}
          onChangeText={setAgenda}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          multiline={true}
          numberOfLines={5}
          placeholder=""
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <SafeAreaView style={styles.doneButtonContainer}>
        <TouchableOpacity style={styles.doneButton} onPress={handleSubmit}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    fontFamily: "Outfit",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    padding: 10,
    fontFamily: "Outfit",
    fontSize: 16,
    backgroundColor: "white",
  },
  agendaInput: {
    height: 40,
    textAlignVertical: "top",
  },
  descriptionInput: {
    height: 800,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontFamily: "Outfit",
    fontSize: 16,
    fontWeight: "600",
  },
  submittedDataContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  submittedDataTitle: {
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "600",
    marginBottom: 10,
  },
  doneButtonContainer: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "white",
    left: 0,
    right: 0,
  },
  doneButton: {
    backgroundColor: Theme.colors.darkBlue,
    margin: 16,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  doneButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "600",
  },
});

export default NewLesson;
