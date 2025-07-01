// components/OccupancyRow.tsx
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { OccupancyUnit } from "@/types"; // Import OccupancyUnit interface

interface OccupancyRowProps {
  unit: OccupancyUnit;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const OccupancyRow: React.FC<OccupancyRowProps> = ({
  unit,
  style,
  textStyle,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[styles.roleText, { color: currentThemeColors.text }, textStyle]}
      >
        {unit.role}
      </Text>
      <Text
        style={[
          styles.unitText,
          { color: currentThemeColors.secondaryText },
          textStyle,
        ]}
      >
        Unit {unit.unitNumber}, {unit.tower}
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
    paddingVertical: 8,
    marginBottom: 5, // Gap between rows
  },
  roleText: {
    fontSize: 16,
    fontWeight: "500",
  },
  unitText: {
    fontSize: 16,
    textAlign: "right",
  },
});

export default OccupancyRow;
