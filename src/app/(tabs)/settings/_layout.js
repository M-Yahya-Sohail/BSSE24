import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#16213E" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Settings" }} />

      <Stack.Screen name="profile" options={{ title: "Profile Settings" }} />

      <Stack.Screen
        name="notifications"
        options={{ title: "Notification Settings" }}
      />
    </Stack>
  );
}
