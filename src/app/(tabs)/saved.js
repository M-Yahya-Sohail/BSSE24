import { View, Text, StyleSheet } from "react-native";

export default function Saved() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Books</Text>
      <Text>No saved books yet.</Text>
      <Text>BSEF24A020</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
