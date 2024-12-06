import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput, Image, FlatList, SafeAreaView } from "react-native";

const FriendItem = ({ item }) => (
  <View style={styles.friendItem}>
    <View style={styles.friendInfo}>
      <Image
        source={require("../../../../assets/images/boy1.png")}
        style={styles.avatar}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
    <Text>Checkbox</Text>
  </View>
);

export default function Modal() {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestedFriends, setSuggestedFriends] = useState([
    {
      id: "1",
      name: "Darrell Underwood",
      selected: false,
    },
    {
      id: "2",
      name: "sasaki.girl333",
      selected: false,
    },
    {
      id: "3",
      name: "gogoncalves.21",
      selected: false,
    },
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Add Student",
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
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.suggestedHeader}>
        <Text style={styles.suggestedTitle}>Suggested</Text>
      </View>

      <FlatList
        data={suggestedFriends}
        renderItem={({ item }) => <FriendItem item={item} />}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    padding: 8,
    fontSize: 16,
  },
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  friendInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "500",
    color: "#000000",
  },
  checkboxContainer: {
    padding: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    backgroundColor: "#3897F0",
    borderColor: "#3897F0",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  suggestedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  suggestedTitle: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Outfit",
    color: "#000000",
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
