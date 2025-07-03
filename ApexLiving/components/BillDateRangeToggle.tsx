// components/bills/BillDateRangeToggle.tsx
import { Colors } from "@/constants/Colors"; // Adjust path as needed
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

interface BillDateRangeToggleProps {
  isAscending: boolean; // true for ascending (oldest first), false for descending (newest first)
  onToggle: () => void;
}

const BillDateRangeToggle: React.FC<BillDateRangeToggleProps> = ({
  isAscending,
  onToggle,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: currentThemeColors.cardBackground },
      ]}
      onPress={onToggle}
      activeOpacity={0.7}
      accessibilityLabel={`Sort by date ${
        isAscending ? "descending" : "ascending"
      }`}
    >
      <Ionicons
        name="calendar-outline"
        size={20}
        color={currentThemeColors.icon}
        style={styles.icon}
      />
      <Text style={[styles.text, { color: currentThemeColors.text }]}>
        Date Range
      </Text>
      <Ionicons
        name={isAscending ? "arrow-up" : "arrow-down"} // Icon changes based on sort order
        size={16}
        color={currentThemeColors.icon}
        style={styles.sortIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10, // Space between this and other filters
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  sortIcon: {
    marginLeft: 8,
  },
});

export default BillDateRangeToggle;
