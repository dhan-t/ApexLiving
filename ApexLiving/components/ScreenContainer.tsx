import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import { StyleSheet, useColorScheme, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  noPaddingTop?: boolean; // Add this prop
}

export default function ScreenContainer({
  children,
  style,
  noPaddingTop,
}: ScreenContainerProps) {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: currentThemeColors.background,
          paddingTop: noPaddingTop ? 0 : 20 + insets.top,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
