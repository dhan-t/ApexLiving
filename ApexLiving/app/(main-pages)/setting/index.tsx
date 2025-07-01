// app/(main-pages)/settings/index.tsx
import React from "react";
import { Alert, StyleSheet, Text, useColorScheme, View } from "react-native";

import InfoRow from "@/components/InfoRow";
import MessageButton from "@/components/MessageButton";
import ProfileSection from "@/components/ProfileSection";
import ScreenContainer from "@/components/ScreenContainer";
import ToggleSetting from "@/components/ToggleSetting";
import { Colors } from "@/constants/Colors";
import { DUMMY_USER_PROFILE } from "@/data/dummydata"; // Import dummy user profile

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  // ... (Toggle logic remains the same) ...
  const handleEnableMarketToggle = (newValue: boolean) => {
    Alert.alert(
      "Market Toggle",
      `Market is now ${newValue ? "Enabled" : "Disabled"}`
    );
  };

  const handleDarkmodeToggle = (newValue: boolean) => {
    Alert.alert(
      "Darkmode Toggle",
      `Darkmode is now ${newValue ? "On" : "Off"}`
    );
  };

  const handleNotificationToggle = (newValue: boolean) => {
    Alert.alert(
      "Notification Toggle",
      `Notifications are now ${newValue ? "Enabled" : "Disabled"}`
    );
  };

  return (
    <ScreenContainer>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle, { color: currentThemeColors.text }]}>
          Settings
        </Text>
        <MessageButton size={24} color={currentThemeColors.icon} />
      </View>

      {/* Profile Section */}
      <Text style={[styles.sectionHeader, { color: currentThemeColors.text }]}>
        Profile
      </Text>
      <ProfileSection
        userProfile={DUMMY_USER_PROFILE} // Pass the entire dummy user profile object
      />

      {/* Market Section */}
      <Text style={[styles.sectionHeader, { color: currentThemeColors.text }]}>
        Market
      </Text>
      <ToggleSetting
        title="Enable market"
        initialValue={true}
        onValueChange={handleEnableMarketToggle}
      />

      {/* Appearance Section */}
      <Text style={[styles.sectionHeader, { color: currentThemeColors.text }]}>
        Appearance
      </Text>
      <ToggleSetting
        title="Darkmode"
        initialValue={colorScheme === "dark"}
        onValueChange={handleDarkmodeToggle}
      />

      {/* Notifications Section */}
      <Text style={[styles.sectionHeader, { color: currentThemeColors.text }]}>
        Notifications
      </Text>
      <ToggleSetting
        title="Notification"
        initialValue={true}
        onValueChange={handleNotificationToggle}
      />

      {/* About Section */}
      <Text style={[styles.sectionHeader, { color: currentThemeColors.text }]}>
        About
      </Text>
      <InfoRow label="App version" value="v1.909" />
      <InfoRow label="Developer" value="Dhan Tamparong" />
      <InfoRow label="Contractor" value="Apex Realtors" />
      <InfoRow label="Contact developer" value="dhantamparong@outlook.com" />

      <View style={[styles.separator, { marginTop: 15 }]} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#3A385E",
    width: "100%",
  },
});
