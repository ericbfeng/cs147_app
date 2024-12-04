import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import LESSON_DATA from "../../../data/LessonData.json";
import LessonItem from "../../../../components/LessonItem";
import { useRouter } from "expo-router";

export default function LessonsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const navigation = useNavigation();

  const { classroomID, headerTitle } = useLocalSearchParams();
  const lessonData = LESSON_DATA.find(
    (item) => item.id === Number(classroomID)
  ).data;
  console.log("this is lesson data", lessonData);

  if (!lessonData) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Lessons not found!</Text>
      </SafeAreaView>
    );
  }

  const handleLessonPress = (item) => {
    router.push({
      pathname: "classes/insideClass/specificLesson",
      params: { lesson_item: (item.id - 1) },
    });
  };

  const navigateToStudents = () => {
    router.push({
      pathname: "classes/insideClass/students",
      params: { classroomID, headerTitle }, // Pass both classroomID and headerTitle
    });
  };

  const renderItem = ({ item }) => (
    <LessonItem lesson={item} onPress={() => handleLessonPress(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={[styles.tabButtonText, styles.activeTabText]}>Lessons</Text>
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
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Icon name="search" size={24} color="#999" style={styles.searchIcon} />
      </View>

      {/* Lessons List */}
      <FlatList
        data={lessonData.slice().reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
    backgroundColor: "#F5F5F5",
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1e3a8a",
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "bold",
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
    padding: 12,
    fontSize: 16,
    color: "#333",
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
