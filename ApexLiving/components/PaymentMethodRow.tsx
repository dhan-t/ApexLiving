// components/PaymentMethodRow.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { PaymentMethod } from "@/types"; // Import PaymentMethod interface

interface PaymentMethodRowProps {
  paymentMethod: PaymentMethod;
  onDelete: (id: string) => void; // Callback to handle deletion (pass id)
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PaymentMethodRow: React.FC<PaymentMethodRowProps> = ({
  paymentMethod,
  onDelete,
  style,
  textStyle,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const handleDelete = () => {
    Alert.alert(
      "Confirm Delete",
      `Are you sure you want to delete ${paymentMethod.bankName} ending in **** ${paymentMethod.lastFourDigits}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => onDelete(paymentMethod.id),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.bankNameText,
          { color: currentThemeColors.text },
          textStyle,
        ]}
      >
        {paymentMethod.bankName}
      </Text>
      <View style={styles.rightContent}>
        <Text
          style={[
            styles.lastFourText,
            { color: currentThemeColors.secondaryText },
            textStyle,
          ]}
        >
          **** {paymentMethod.lastFourDigits}
        </Text>
        <TouchableOpacity
          onPress={handleDelete}
          accessibilityLabel={`Delete ${paymentMethod.bankName}`}
        >
          <Ionicons
            name="trash-outline"
            size={20}
            color="red"
            style={styles.deleteIcon}
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
    paddingVertical: 8,
    // No bottom border here, looks like a group in Figma [cite: image_1cf6d7.png]
    marginBottom: 5, // Gap between rows
  },
  bankNameText: {
    fontSize: 16,
    fontWeight: "500",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  lastFourText: {
    fontSize: 16,
    marginRight: 10,
  },
  deleteIcon: {
    padding: 5,
  },
});

export default PaymentMethodRow;
