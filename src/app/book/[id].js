import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const books = [
  { id: "b1", title: "Clean Code", author: "Martin", year: 2008 },
  { id: "b2", title: "Eloquent JS", author: "Haverbeke", year: 2018 },
  { id: "b3", title: "Refactoring", author: "Fowler", year: 1999 },
  { id: "b4", title: "Calculus", author: "D.P. Zia", year: 2018 },
  { id: "b5", title: "Machine Learning", author: "P. Madiha", year: 2016 },
  { id: "b6", title: "Code in C++", author: "FHB", year: 1999 },
];

export default function BookDetail() {
  const { id, from, sort } = useLocalSearchParams();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Book Not Found" }} />
        <Text style={styles.title}>Book not found!</Text>
        <Text style={styles.info}>No book exists with ID: {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: book.title }} />
      <Text style={styles.title}>{book.title}</Text>

      <Text style={styles.info}>
        <Text style={styles.bold}>Author: </Text>
        {book.author}
      </Text>

      <Text style={styles.info}>
        <Text style={styles.bold}>Published: </Text>
        {book.year}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.bold}>ID: </Text>
        {id}
      </Text>

      <Text style={styles.info}>
        <Text style={styles.bold}>From: </Text>
        {from}
      </Text>

      <Text style={styles.info}>
        <Text style={styles.bold}>Sort: </Text>
        {sort}
      </Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#16213E",
    marginBottom: 20,
  },
  info: {
    fontSize: 17,
    color: "#444",
    marginBottom: 12,
  },
  bold: {
    fontWeight: "bold",
    color: "#16213E",
  },
});
