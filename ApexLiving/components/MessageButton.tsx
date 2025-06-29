// components/MessageButton.tsx
import { Colors } from "@/constants/Colors"; // Adjust path to your Colors.ts
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

interface MessageButtonProps {
  // Optional: You can pass a custom size if needed, defaults to 24
  size?: number;
  // Optional: You can pass a custom color if needed, defaults to currentThemeColors.icon
  color?: string;
  // Optional: If you want to navigate to a different route than the default '/messages'
  targetRoute?: string;
  // Optional: Any additional styles for the TouchableOpacity container
  style?: object;
}

const MessageButton: React.FC<MessageButtonProps> = ({
  size = 24, // Default size
  color, // Optional custom color
  targetRoute = "/messages", // Default route to navigate to
  style,
}) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  // Determine the final color, prioritize 'color' prop, then theme icon color
  const iconColor = color || currentThemeColors.icon;

  const handlePress = () => {
    router.push("/(chats)/message"); // Navigate to the specified route
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, style]} // Apply base styles and any passed custom styles
      accessibilityLabel="Open messages" // Good for accessibility
    >
      <Ionicons
        name="chatbubble-ellipses-outline"
        size={size}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // You can add default styling for the button container here if needed
    // e.g., padding, background, etc.
    // However, for just an icon, usually minimal styling on the container is desired
    padding: 5, // A small touch area padding
  },
});

export default MessageButton;
