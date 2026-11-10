import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Link href="/settings/profile" style={styles.link}>
        Profile Settings →
      </Link>

      <Link href="/settings/notifications" style={styles.link}>
        Notification Settings →
      </Link>

      <Text style={styles.roll}>BSEF24A020</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#16213E",
    marginBottom: 25,
  },
  link: {
    fontSize: 17,
    color: "#16213E",
    backgroundColor: "white",
    padding: 18,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  roll: {
    marginTop: 20,
    color: "#666",
  },
});