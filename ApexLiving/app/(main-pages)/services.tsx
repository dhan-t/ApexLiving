import MessageButton from "@/components/MessageButton";
import ScreenContainer from "@/components/ScreenContainer";
import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Services() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  return (
    <ScreenContainer>
      <View style={[styles.pageName]}>
        <Text style={[styles.pageTitle]}>Services</Text>
        <MessageButton size={30} color={currentThemeColors.icon} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  pageName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
