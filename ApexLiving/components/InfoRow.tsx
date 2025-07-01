// components/InfoRow.tsx
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors"; // Adjust path

interface InfoRowProps {
  label: string;
  value: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
}

const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  style,
  labelStyle,
  valueStyle,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.labelText,
          { color: currentThemeColors.text },
          labelStyle,
        ]}
      >
        {label}
      </Text>
      <Text
        style={[
          styles.valueText,
          { color: currentThemeColors.secondaryText },
          valueStyle,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 5, // Smaller padding as per Figma [cite: image_384875.png]
    marginBottom: 10, // Default gap between info rows
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
  },
  valueText: {
    fontSize: 16,
    textAlign: "right",
  },
});

export default InfoRow;
