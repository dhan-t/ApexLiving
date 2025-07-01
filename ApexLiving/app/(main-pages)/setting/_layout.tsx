// app/(main-pages)/settings/_layout.tsx
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function SettingsStackLayout() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <Stack
      screenOptions={{
        headerShown: true, // Show header for this stack
        headerTintColor: currentThemeColors.text, // Color of back button and title
        headerStyle: {
          backgroundColor: currentThemeColors.navbarBG, // Header background
          // No shadow on header by default for a flat look
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index" // Corresponds to settings/index.tsx
        options={{
          headerShown: false, // Hide header on the main Settings list page if you have a custom header
          title: "Settings", // Default title, will be hidden if headerShown: false
        }}
      />
      <Stack.Screen
        name="profile" // Corresponds to settings/prorfile.tsx
        options={{
          title: "Profile", // Title for the Profile Details screen
        }}
      />
      {/* Add more screens specific to the Settings flow here */}
    </Stack>
  );
}
