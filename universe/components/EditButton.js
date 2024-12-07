import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Theme from "../assets/theme";

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

const EDIT_BUTTON_SIZE = 56;

const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    // bottom: 100,
    marginTop: 690,
    right: 24,
    width: EDIT_BUTTON_SIZE,
    height: EDIT_BUTTON_SIZE,
    borderRadius: EDIT_BUTTON_SIZE / 2,
    backgroundColor: Theme.colors.darkBlue,
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

export default EditButton;
