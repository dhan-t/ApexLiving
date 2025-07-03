// components/CategoryButton.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors"; // Adjust path as needed

interface CategoryButtonProps {
  onPress: () => void; // Function to call when the button is pressed
  title: string; // Text displayed on the button, e.g., "Categories"
  iconName?: keyof typeof Ionicons.glyphMap; // Optional: Ionicons icon name
  style?: ViewStyle; // Optional: Custom styles for the button container
  textStyle?: TextStyle; // Optional: Custom styles for the button text
  iconColor?: string; // Optional: Custom color for the icon
  iconSize?: number; // Optional: Custom size for the icon
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  onPress,
  title,
  iconName,
  style,
  textStyle,
  iconColor,
  iconSize = 20, // Default icon size
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const defaultIconColor = iconColor || currentThemeColors.text;
  const defaultTextColor = textStyle?.color || currentThemeColors.icon;
  const defaultBackgroundColor =
    style?.backgroundColor || currentThemeColors.cardBackground;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: defaultBackgroundColor },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {iconName && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={defaultIconColor}
          style={styles.icon}
        />
      )}
      <Text style={[styles.buttonText, { color: defaultTextColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10, // For a pill shape
    alignSelf: "flex-start", // Only take up as much width as needed
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "800", // Adjusted from bold to match the image's font weight
  },
});

export default CategoryButton;
