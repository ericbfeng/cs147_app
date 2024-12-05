import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Profile from "../../insights/insightProfile";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import EditButton from "../../../../components/EditButton";

const names = [
  { name: "Bob C." },
  { name: "Anthony S." },
  { name: "Jimmy L." },
  { name: "Vivek Z." },
  { name: "Andrew P." },
];

const InsightCard = ({ name }) => (
  <View style={styles.card}>
    <Image
      source={require("../../../../assets/images/boy1.png")} // Replace with actual avatar image
      style={styles.avatar}
    />
    <Text style={styles.cardName}>{name}</Text>
  </View>
);

export default function StudentsScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false); // Track edit mode state

  const { classroomID, headerTitle } = useLocalSearchParams();
  const [selectedName, setSelectedName] = useState(null); // State for selected name
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  {
    /* Not sure if we should be able to navigate from this page to the individual students pages */
  }

  const filteredNames = names.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  const navigateToLessons = () => {
    router.push({
      pathname: "classes/insideClass/lessons",
      params: { headerTitle, classroomID },
    });
  };

  const handleEditPress = () => {
    setEditMode((prev) => !prev); // Toggle edit mode
  };

  return (
    <View style={styles.safeArea}>
      {!selectedName ? (
        <>
          {/* Header */}
          {/* <Text style={styles.headerText}>Students</Text> */}
          <View style={styles.header}>
            <TouchableOpacity
              style={[styles.tabButton]}
              onPress={navigateToLessons}
            >
              <Text style={[styles.tabButtonText, styles.activeTabText]}>
                Lessons
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
              <Text style={styles.tabButtonText}>Students</Text>
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search student"
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <Icon
              name="search"
              size={24}
              color="#999"
              style={styles.searchIcon}
            />
          </View>

          {/* Grid of Students */}
          <FlatList
            data={filteredNames}
            keyExtractor={(item) => item.name}
            numColumns={2} // Display two cards per row
            renderItem={({ item }) => <InsightCard name={item.name} />}
            contentContainerStyle={styles.grid}
          />
        </>
      ) : (
        <Profile name={selectedName} onClose={handleCloseProfile} />
      )}

      <EditButton onPress={handleEditPress} isEditMode={editMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
    // borderWidth: 1,
    // borderColor: "red",
    // paddingTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
    fontFamily: "Outfit",
  },
  searchIcon: {
    marginLeft: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "black",
    fontFamily: "Outfit-Bold",
    // fontWeight: '700',
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
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  recentText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Outfit",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
    marginLeft: 10,
  },
  grid: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 80,
  },
  card: {
    flex: 1,
    backgroundColor: "#DBDFEA",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15, // Horizontal margin for consistent spacing
    marginVertical: 15, // Vertical margin for consistent spacing
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    fontFamily: "Outfit",
  },
});
