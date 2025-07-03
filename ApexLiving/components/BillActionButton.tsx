// components/bills/BillActionButton.tsx
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
} from "react-native"; // Import Alert for popup

interface BillActionButtonProps {
  title: string;
  onPress: () => void; // Logic will be passed from parent
  style?: ViewStyle;
  textStyle?: TextStyle;
  isPrimary?: boolean; // For "Pay bills" button vs "View Full..."
}

const BillActionButton: React.FC<BillActionButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  isPrimary = false,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const buttonBgColor = isPrimary
    ? currentThemeColors.tint // Use tint for primary action
    : currentThemeColors.cardBackground; // Use card background for secondary actions

  const buttonTextColor = isPrimary
    ? currentThemeColors.background // White text on tint background
    : currentThemeColors.text; // Primary text color on card background

  const handlePress = () => {
    Alert.alert("Button Clicked", `You clicked: "${title}"`); // Toast/popup message
    onPress(); // Execute parent's logic
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonBgColor }, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, { color: buttonTextColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15, // Default spacing between buttons
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BillActionButton;
