// components/ProfileSection.tsx
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  useColorScheme,
} from "react-native";

import { Colors } from "@/constants/Colors"; // Adjust path
import { UserProfile } from "@/types/index"; // Import UserProfile interface

interface ProfileSectionProps {
  userProfile: UserProfile; // Now expects a UserProfile object
  onPress?: (profileId: string) => void; // Optional custom press handler
  targetRoute?: string; // Optional target route for navigation (e.g., for different user types)
  style?: ViewStyle; // Optional styling for the container
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  userProfile, // Destructure userProfile
  onPress,
  targetRoute = "/setting/profile", // Default route to the profile details page
  style,
}) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const handlePress = () => {
    if (onPress) {
      onPress(userProfile.id); // Pass the user ID if a custom handler is provided
    } else {
      // Navigate to the profile page, potentially passing the user ID as a parameter
      router.push({
        pathname: targetRoute as Href<string>,
        params: { userId: userProfile.id }, // Pass the user ID as a parameter
      });
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: currentThemeColors.cardBackground },
        style,
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityLabel={`View profile for ${userProfile.fullName}`}
    >
      <View>
        <Text
          style={[styles.nameText, { color: currentThemeColors.background }]} // Changed to currentThemeColors.text
        >
          {userProfile.fullName}
        </Text>
        <Text
          style={[styles.typeText, { color: currentThemeColors.background }]} // Changed to currentThemeColors.secondaryText
        >
          {userProfile.role}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward-outline" // Changed icon as per image
        size={24}
        color={currentThemeColors.background} // Changed to currentThemeColors.icon
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
    marginBottom: 20, // Add a default bottom margin
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

export default ProfileSection;
