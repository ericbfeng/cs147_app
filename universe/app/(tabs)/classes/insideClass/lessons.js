import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  View,
  Alert,
} from "react-native";
import { Link } from "expo-router";

import { useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import EditButton from "../../../../components/EditButton";

import LESSON_DATA from "../../../data/LessonData.json";
import LessonItem from "../../../../components/LessonItem";
import { useRouter } from "expo-router";

export default function LessonsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false); // Track edit mode state

  const { classroomID, headerTitle } = useLocalSearchParams();
  const lessonData = LESSON_DATA.find(
    (item) => item.id === Number(classroomID)
  ).data;

  const [data, setData] = useState(lessonData); // Manage the classroom data

  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  if (!lessonData) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Lessons not found!</Text>
      </SafeAreaView>
    );
  }

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id)); // Remove item by ID
  };

  const showAlert = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => handleDelete(id),
          style: "destructive", // iOS only - makes the button red
        },
      ],
      { cancelable: true } // Android only - allows tap outside to dismiss
    );
  };

  const handleEditPress = () => {
    setEditMode((prev) => !prev); // Toggle edit mode
  };

  const handleLessonPress = (item) => {
    router.push({
      pathname: "classes/insideClass/specificLesson",
      params: { data: item },
    });
  };

  const navigateToStudents = () => {
    router.push({
      pathname: "classes/insideClass/students",
      params: { classroomID, headerTitle }, // Pass both classroomID and headerTitle
    });
  };

  const renderItem = ({ item }) => (
    <LessonItem
      lesson={item}
      onPress={() => handleLessonPress(item)}
      showDelete={editMode} // Show delete button only in edit mode
      onDelete={() => showAlert(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={[styles.tabButtonTextMain, styles.activeTabText]}>
            Lessons
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={navigateToStudents}>
          <Text style={styles.tabButtonText}>Students</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search lesson by keywords"
          placeholderTextColor="#888"
          fontFamily="Outfit"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Icon name="search" size={24} color="#999" style={styles.searchIcon} />
      </View>

      {/* Create New Lesson Bar */}
      {editMode && (
        <Link
          href="classes/insideClass/newLessonModal"
          style={styles.createContainer}
        >
          <View style={styles.createTextContainer}>
            <Text style={styles.createNewText}>Create New Lesson</Text>
          </View>
        </Link>
      )}

      {/* Lessons List */}
      <FlatList
        data={data.slice().reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <EditButton onPress={handleEditPress} isEditMode={editMode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    margin: 16,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1e3a8a",
  },
  tabButtonText: {
    fontSize: 16,
    fontFamily: "Outfit",
    color: "#666",
  },
  activeTabText: {
    color: "#1e3a8a",
  },
  header: {
    flexDirection: "row", // Horizontal layout
    justifyContent: "space-around", // Evenly distribute buttons
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabButtonTextMain: {
    fontSize: 16,
    fontFamily: "Outfit-Bold",
    color: "#666",
  },
  createContainer: {
    backgroundColor: "#E4E4E4",
    marginLeft: 18,
    height: 50,
    marginRight: 18,
    borderRadius: 10,
  },
  createTextContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  createNewText: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
  },
  searchBar: {
    backgroundColor: "#F0F0F5",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    marginHorizontal: 20,
    fontFamily: "Outfit",
    // borderColor: "blue",
    // borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 16,
    fontFamily: "Outfit",
  },
  searchIcon: {
    marginLeft: 8,
  },
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 16,
  },
});
