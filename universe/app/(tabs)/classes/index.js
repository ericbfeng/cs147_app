import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router"; // Use useRouter for navigation

import ClassroomData from "../../data/ClassroomData.json";
import Feather from "@expo/vector-icons/Feather";

const ClassButton = ({ title, onPress, showDelete, onDelete }) => (
  <View style={styles.classButtonContainer}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.classButton}
      activeOpacity={0.7}
    >
      <View style={styles.buttonContainer}>
        <Image
          source={require("../../../assets/images/blue.png")}
          style={styles.planetImage}
          resizeMode="contain"
        />
        <View style={styles.textOverlay}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
);

const EditButton = ({ onPress, isEditMode }) => (
  <TouchableOpacity
    style={styles.editButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Feather
      name={isEditMode ? "x" : "edit-2"} // Toggle between "x" and "edit-2"
      size={30}
      color="white"
    />
  </TouchableOpacity>
);

const ClassesInterface = () => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false); // Track edit mode state
  const [data, setData] = useState(ClassroomData); // Manage the classroom data

  const handleClassPress = (item) => {
    router.push({
      pathname: "classes/insideClass/lessons",
      params: { headerTitle: item.name, classroomID: item.dataID },
    });
  };

  const handleEditPress = () => {
    setEditMode((prev) => !prev); // Toggle edit mode
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id)); // Remove item by ID
  };

  const renderItem = ({ item }) => (
    <ClassButton
      title={item.name}
      onPress={() => handleClassPress(item)}
      showDelete={editMode} // Show delete button only in edit mode
      onDelete={() => handleDelete(item.id)} // Handle delete action
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        <FlatList
          data={data}
          contentContainerStyle={{ gap: VERTICAL_SPACING }}
          columnWrapperStyle={{ gap: HORIZONTAL_SPACING }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>

      <EditButton onPress={handleEditPress} isEditMode={editMode} />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");
const BUTTON_SIZE = width * 0.35;
const HORIZONTAL_SPACING = width * 0.12;
const VERTICAL_SPACING = HORIZONTAL_SPACING;
const EDIT_BUTTON_SIZE = 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gridContainer: {
    flex: 1,
  },
  classButtonContainer: {
    alignItems: "center",
  },
  classButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  planetImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    fontFamily: "Outfit",
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  editButton: {
    position: "absolute",
    bottom: 100,
    right: 24,
    width: EDIT_BUTTON_SIZE,
    height: EDIT_BUTTON_SIZE,
    borderRadius: EDIT_BUTTON_SIZE / 2,
    backgroundColor: "#1e3a8a",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ClassesInterface;
