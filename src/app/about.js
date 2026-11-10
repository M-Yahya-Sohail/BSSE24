import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Book Library</Text>
      <Text style={styles.description}>
        This application displays a collection of books with their authors and
        publication years.
      </Text>
      <Text style={styles.roll}>BSEF24A020</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Back to Books →</Text>
      </Pressable>
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
    color: "#16213E",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
  roll: {
    marginTop: 20,
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#16213e",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
