import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import useSafeAreaInsets

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hides the header for all tab screens
        tabBarStyle: {
          backgroundColor: currentThemeColors.navbarBG,
          height: 80 + insets.bottom,
          paddingTop: 10,
        },
        tabBarActiveTintColor: currentThemeColors.tabIconSelected,
        tabBarInactiveTintColor: currentThemeColors.tabIconDefault,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={30}
              name={focused ? "settings" : "settings-outline"}
              color={
                focused
                  ? currentThemeColors.tabIconSelected
                  : currentThemeColors.tabIconDefault
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: "Market",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={30}
              name={focused ? "cart" : "cart-outline"}
              color={
                focused
                  ? currentThemeColors.tabIconSelected
                  : currentThemeColors.tabIconDefault
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={30}
              name={focused ? "home" : "home-outline"}
              color={
                focused
                  ? currentThemeColors.tabIconSelected
                  : currentThemeColors.tabIconDefault
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="bills"
        options={{
          title: "Bills",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={30}
              name={focused ? "receipt" : "receipt-outline"}
              color={
                focused
                  ? currentThemeColors.tabIconSelected
                  : currentThemeColors.tabIconDefault
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={30}
              name={focused ? "construct" : "construct-outline"}
              color={
                focused
                  ? currentThemeColors.tabIconSelected
                  : currentThemeColors.tabIconDefault
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
