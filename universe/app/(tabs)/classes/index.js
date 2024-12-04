import React from "react";
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

const ClassButton = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.classButton}
    activeOpacity={0.7}
  >
    <View style={styles.buttonContainer}>
      <Image
        source={require("../../../assets/images/PlanetShape.png")}
        style={styles.planetImage}
        resizeMode="contain"
      />
      {/* Overlay container for centered text */}
      <View style={styles.textOverlay}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const EditButton = ({ onPress }) => (
  <TouchableOpacity
    style={styles.editButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Feather name="edit-2" size={30} color="white" />
  </TouchableOpacity>
);

const ClassesInterface = () => {
  const router = useRouter();

  const handleClassPress = (item) => {
    router.push({
      pathname: "classes/insideClass/lessons",
      params: { headerTitle: item.name, classroomID: item.dataID },
    });
  };

  const handleEditPress = () => {
    console.log("Edit button pressed");
    // Handle edit mode or navigation here
  };

  const renderItem = ({ item }) => (
    <ClassButton title={item.name} onPress={() => handleClassPress(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        <FlatList
          data={ClassroomData}
          contentContainerStyle={{ gap: VERTICAL_SPACING }}
          columnWrapperStyle={{ gap: HORIZONTAL_SPACING }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>

      <EditButton onPress={handleEditPress} />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");
const BUTTON_SIZE = width * 0.35;
const HORIZONTAL_SPACING = width * 0.12; // Increased spacing between columns
const VERTICAL_SPACING = HORIZONTAL_SPACING; // Increased vertical spacing
const EDIT_BUTTON_SIZE = 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 35,
  },
  gridContainer: {
    flex: 1,
    margin: width * 0.08,
    paddingTop: VERTICAL_SPACING * 0.3,
  },
  classButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
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
