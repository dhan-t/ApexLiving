// components/ProfileDropdownSection.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { UserProfile } from "@/types"; // Import UserProfile interface

interface ProfileDropdownSectionProps {
  userProfile: UserProfile; // Pass the entire user profile object
  onRoleChange?: (newRole: UserProfile["role"]) => void; // Callback for role change
  style?: ViewStyle;
}

const ProfileDropdownSection: React.FC<ProfileDropdownSectionProps> = ({
  userProfile,
  onRoleChange,
  style,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];
  const [currentRole, setCurrentRole] = useState(userProfile.role);

  // In a real app, this would open a modal/bottom sheet for role selection
  const handleDropdownPress = () => {
    Alert.alert(
      "Change Role",
      "This would open a role selection dropdown/modal.",
      [
        { text: "Cancel", style: "cancel" },
        // Example: hardcode switching to 'Owner' or 'Tenant' for demo
        {
          text: "Switch to Owner",
          onPress: () => {
            setCurrentRole("Owner");
            onRoleChange?.("Owner");
            // In real app, update backend here or through a global state
          },
        },
        {
          text: "Switch to Tenant",
          onPress: () => {
            setCurrentRole("Tenant");
            onRoleChange?.("Tenant");
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: currentThemeColors.cardBackground },
        style,
      ]}
      onPress={handleDropdownPress}
      activeOpacity={0.7}
      accessibilityLabel="Change profile role"
    >
      <View>
        <Text style={[styles.nameText, { color: currentThemeColors.text }]}>
          {userProfile.fullName}
        </Text>
        <Text
          style={[styles.typeText, { color: currentThemeColors.secondaryText }]}
        >
          {currentRole}
        </Text>
      </View>
      <Ionicons
        name="chevron-down-outline" // Down arrow for dropdown [cite: image_1cf6d7.png]
        size={24}
        color={currentThemeColors.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "600",
  },
  typeText: {
    fontSize: 14,
    marginTop: 2,
  },
});

export default ProfileDropdownSection;
