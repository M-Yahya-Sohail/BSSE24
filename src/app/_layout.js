import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#31416e" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="book/[id]" options={{ title: "Book Detail" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
