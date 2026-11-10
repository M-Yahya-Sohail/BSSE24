import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function Notifications() {
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Settings</Text>

      <View style={styles.row}>
        <Text style={styles.info}>Enable Notifications</Text>

        <Switch
          value={enabled}
          onValueChange={setEnabled}
          trackColor={{ false: "#ccc", true: "#8194C2" }}
          thumbColor={enabled ? "#16213E" : "#f4f3f4"}
        />
      </View>

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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  info: {
    fontSize: 17,
    color: "#444",
  },
  roll: {
    marginTop: 25,
    fontSize: 14,
    color: "#666",
  },
});