// app/(main-pages)/market/_layout.tsx
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function MarketStackLayout() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <Stack
      screenOptions={{
        headerShown: true, // You might want a header for sub-pages
        headerTintColor: currentThemeColors.text, // Color of back button and title
        headerStyle: {
          backgroundColor: currentThemeColors.navbarBG, // Background of the header bar
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // Optionally hide header for index page if you have a custom one
        // headerRight and other options can go here
      }}
    >
      <Stack.Screen
        name="index" // Corresponds to market/index.tsx
        options={{
          headerShown: false, // Hide header on the main Market list page if you have a custom header
          title: "Marketplace", // Default title for this screen in the stack
        }}
      />
      <Stack.Screen
        name="[id]" // Corresponds to market/[id].tsx
        options={{
          title: "Product Details", // Default title, can be overridden in the component
        }}
      />
      {/* Add more screens specific to the Market flow here */}
    </Stack>
  );
}
