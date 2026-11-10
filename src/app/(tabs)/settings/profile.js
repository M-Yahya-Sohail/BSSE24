import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function Profile() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>

      <Text style={styles.info}>Name: Muhammad Yahya Sohail</Text>
      <Text style={styles.info}>Roll No: BSEF24A020</Text>

      <View style={styles.row}>
        <Text style={styles.info}>Public Profile</Text>

        <Switch
          value={isPublic}
          onValueChange={setIsPublic}
          trackColor={{ false: "#ccc", true: "#8194C2" }}
          thumbColor={isPublic ? "#16213E" : "#f4f3f4"}
        />
      </View>
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
  info: {
    fontSize: 17,
    color: "#444",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
});