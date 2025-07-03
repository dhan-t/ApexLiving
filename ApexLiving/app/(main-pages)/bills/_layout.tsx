// app/(main-pages)/bills/_layout.tsx
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function BillsStackLayout() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <Stack
      screenOptions={{
        headerShown: true, // Show header for this stack
        headerTintColor: currentThemeColors.text,
        headerStyle: {
          backgroundColor: currentThemeColors.background,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="index" // Corresponds to app/(main-pages)/bills/index.tsx
        options={{
          headerShown: false, // Hide header on the main Bills list page
          title: "Bills",
        }}
      />
      <Stack.Screen
        name="[id]" // <--- NEW: Corresponds to app/(main-pages)/bills/[id].tsx
        options={{
          title: "Bill Details", // Default title, will be overridden by component
        }}
      />
    </Stack>
  );
}
