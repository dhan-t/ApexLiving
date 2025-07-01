// components/EditableInfoRow.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { Href, useRouter } from "expo-router"; // Import Href

interface EditableInfoRowProps {
  label: string;
  value: string;
  editTargetRoute: Href<string>; // Route to the editing screen (e.g., /settings/edit-email)
  onEditPress?: () => void; // Optional custom handler if not using navigation
  isSensitive?: boolean; // If true, value will be masked (e.g., password)
  style?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
}

const EditableInfoRow: React.FC<EditableInfoRowProps> = ({
  label,
  value,
  editTargetRoute,
  onEditPress,
  isSensitive = false,
  style,
  labelStyle,
  valueStyle,
}) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const handleEditPress = () => {
    if (onEditPress) {
      onEditPress();
    } else {
      router.push(editTargetRoute);
    }
  };

  const displayValue = isSensitive ? "********" : value;

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
      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.valueText,
            { color: currentThemeColors.secondaryText },
            valueStyle,
          ]}
        >
          {displayValue}
        </Text>
        <TouchableOpacity
          onPress={handleEditPress}
          accessibilityLabel={`Edit ${label}`}
        >
          <Ionicons
            name="create-outline"
            size={20}
            color={currentThemeColors.icon}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#3A385E", // Subtle separator
    marginBottom: 5, // Gap between rows
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 16,
    marginRight: 10, // Space between value and edit icon
  },
  editIcon: {
    padding: 5, // Make icon easier to tap
  },
});

export default EditableInfoRow;
