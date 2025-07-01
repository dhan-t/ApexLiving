// components/SolidButton.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";

interface SolidButtonProps {
  onPress: () => void;
  title: string;
  iconName?: keyof typeof Ionicons.glyphMap; // Optional icon
  iconSize?: number;
  iconColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean; // For showing loading spinner
}

const SolidButton: React.FC<SolidButtonProps> = ({
  onPress,
  title,
  iconName,
  iconSize = 20,
  iconColor,
  style,
  textStyle,
  disabled = false,
  loading = false,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const defaultIconColor = iconColor || currentThemeColors.tabIconSelected; // White/tint color for icons
  const defaultTextColor =
    textStyle?.color || currentThemeColors.tabIconSelected; // White/tint for text
  const defaultBackgroundColor =
    style?.backgroundColor ||
    currentThemeColors.background ||
    currentThemeColors.tint; // A default button background

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: defaultBackgroundColor },
        disabled && styles.disabledButton, // Style for disabled state
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading} // Disable if explicitly disabled or loading
    >
      {loading ? (
        <ActivityIndicator color={defaultTextColor} size="small" />
      ) : (
        <>
          {iconName && (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={defaultIconColor}
              style={styles.icon}
            />
          )}
          <Text
            style={[styles.buttonText, { color: defaultTextColor }, textStyle]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.6, // Dim the button when disabled
  },
});

export default SolidButton;
