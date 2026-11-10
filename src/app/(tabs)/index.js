import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { router, Link } from "expo-router";

const books = [
  { id: "b1", title: "Clean Code", author: "Martin", year: 2008 },
  { id: "b2", title: "Eloquent JS", author: "Haverbeke", year: 2018 },
  { id: "b3", title: "Refactoring", author: "Fowler", year: 1999 },
  { id: "b4", title: "Calculus", author: "D.P. Zia", year: 2018 },
  { id: "b5", title: "Machine Learning", author: "P. Madiha", year: 2016 },
  { id: "b6", title: "Code in C++", author: "FHB", year: 1999 },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Books</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.book}
              onPress={() =>
                router.push({
                  pathname: "/book/[id]",
                  params: {
                    id: item.id,
                    from: "Home",
                    sort: "title",
                  },
                })
              }
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text>
                {item.author} - {item.year}
              </Text>
            </Pressable>
          );
        }}
      />

      <Link href="/about" style={styles.aboutLink}>
        About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  book: {
    padding: 16,
    backgroundColor: "white",
    marginBottom: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  aboutLink: {
    textAlign: "center",
    color: "#16213E",
    fontSize: 17,
    fontWeight: "bold",
    padding: 15,
    marginBottom: 80,
  },
});
