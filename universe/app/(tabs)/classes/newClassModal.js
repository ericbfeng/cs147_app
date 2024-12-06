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
import { useData } from "./DataContext";
import { useRouter } from "expo-router"; // Use useRouter for navigation

const NewClass = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();
  const { classes, addClass } = useData();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      title: "Add Classroom",
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

  const handleSubmit = () => {
    const newData = {
      id: Date.now().toString(),
      name: title,
      dataID: 1,
    };
    addClass(newData);
    router.back();
  };

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
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={subject}
          onChangeText={setSubject}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Tags</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={tags}
          onChangeText={setTags}
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
    fontFamily: "System",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    backgroundColor: "white",
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
    backgroundColor: "#3897F0",
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

export default NewClass;
