import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router"; // Import navigation
import StudentCard from "../../components/StudentCard";
import STUDENT_DATA from "../data/StudentData.json"; // Adjust the path as needed
import Theme from "../../assets/theme";

export default function RecommendedStudents() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <Text style={styles.header}>Recommended Students</Text>

      {/* Student List */}

      <FlatList
        data={STUDENT_DATA}
        renderItem={({ item }) => <StudentCard profile={item} />}
        keyExtractor={(item, index) => index.toString()} // Use index if IDs are not available
        contentContainerStyle={styles.flatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: Theme.sizes.textHeading,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginVertical: 20,
  },
  flatList: {
    paddingHorizontal: 30,
    // borderWidth: 1,
    // borderColor: 'red',
    gap: 20,
  },
});
