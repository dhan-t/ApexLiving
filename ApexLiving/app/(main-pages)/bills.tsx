import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import useSafeAreaInsets
import { Colors } from "@/constants/Colors";

export default function billings() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Ionicons name="heart" size={32} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});
