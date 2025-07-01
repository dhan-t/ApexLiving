// components/ToggleSetting.tsx
import { Colors } from "@/constants/Colors"; // Adjust path
import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

interface ToggleSettingProps {
  title: string;
  description?: string; // Optional description below the title
  initialValue: boolean; // Initial state of the toggle
  onValueChange: (newValue: boolean) => void; // Callback when toggle changes
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

const ToggleSetting: React.FC<ToggleSettingProps> = ({
  title,
  description,
  initialValue,
  onValueChange,
  style,
  titleStyle,
  descriptionStyle,
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onValueChange(newValue); // Notify parent component of the change
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.titleText,
            { color: currentThemeColors.text },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {description && (
          <Text
            style={[
              styles.descriptionText,
              { color: currentThemeColors.secondaryText },
              descriptionStyle,
            ]}
          >
            {description}
          </Text>
        )}
      </View>
      <Switch
        trackColor={{
          false: currentThemeColors.toggleBodyIn, // Inactive track color
          true: currentThemeColors.toggleBodyAc, // Active track color (your light blue)
        }}
        thumbColor={
          isEnabled
            ? currentThemeColors.toggleHead
            : currentThemeColors.toggleHead
        } // Thumb color
        ios_backgroundColor={currentThemeColors.toggleHead} // iOS specific background
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 15, // Default gap between settings
  },
  textContainer: {
    flex: 1, // Allow text to take available space
    marginRight: 10, // Space between text and switch
  },
  titleText: {
    fontSize: 16,
    fontWeight: "300",
  },
  descriptionText: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default ToggleSetting;
