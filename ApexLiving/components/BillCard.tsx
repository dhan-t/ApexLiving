// components/bills/BillCard.tsx
import { Colors } from "@/constants/Colors";
import { BillCycle, BillStatus } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router"; // Import useRouter and Href
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native"; // Import TouchableOpacity

interface BillCardProps {
  bill: BillCycle;
}

const BillCard: React.FC<BillCardProps> = ({ bill }) => {
  const router = useRouter(); // Initialize router
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const getStatusStyle = (status: BillStatus) => {
    switch (status) {
      case "Paid":
        return {
          backgroundColor: currentThemeColors.statusPaid,
          textColor: currentThemeColors.statusText,
        };
      case "Unpaid":
        return {
          backgroundColor: currentThemeColors.statusUnpaid,
          textColor: currentThemeColors.statusText,
        };
      case "On-going":
        return {
          backgroundColor: currentThemeColors.statusOngoing,
          textColor: currentThemeColors.statusText,
        };
      default:
        return {
          backgroundColor: currentThemeColors.secondaryText,
          textColor: currentThemeColors.background,
        };
    }
  };

  const { backgroundColor: statusBgColor, textColor: statusTextColor } =
    getStatusStyle(bill.status);

  const handleCardPress = () => {
    // Navigate to the bill details page, passing the bill ID
    router.push({
      pathname: `/bills/${bill.id}` as Href<string>, // Correct path for dynamic route
      params: { billId: bill.id }, // You can pass params if needed, though ID is in pathname
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        { backgroundColor: currentThemeColors.cardBackground },
      ]}
      onPress={handleCardPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.monthRange, { color: currentThemeColors.text }]}>
        {bill.monthRange}
      </Text>
      <View style={styles.billDetails}>
        <View style={styles.billItem}>
          <Ionicons
            name="flash-outline"
            size={18}
            color={currentThemeColors.accentYellow}
            style={styles.billIcon}
          />
          <Text style={[styles.billText, { color: currentThemeColors.text }]}>
            ₱ {bill.electricity}
          </Text>
        </View>
        <View style={styles.billItem}>
          <Ionicons
            name="water-outline"
            size={18}
            color={currentThemeColors.accentBlue}
            style={styles.billIcon}
          />
          <Text style={[styles.billText, { color: currentThemeColors.text }]}>
            ₱ {bill.water}
          </Text>
        </View>
        <View style={styles.billItem}>
          <Ionicons
            name="business-outline"
            size={18}
            color={currentThemeColors.icon}
            style={styles.billIcon}
          />
          <Text style={[styles.billText, { color: currentThemeColors.text }]}>
            ₱ {bill.associationDues}
          </Text>
        </View>
      </View>

      <View style={styles.statusRow}>
        <View style={[styles.statusTag, { backgroundColor: statusBgColor }]}>
          <Text style={[styles.statusText, { color: statusTextColor }]}>
            {bill.status}
          </Text>
        </View>
        {bill.status === "Paid" && bill.paidDate && (
          <Text
            style={[
              styles.dateText,
              { color: currentThemeColors.secondaryText },
            ]}
          >
            Paid: {bill.paidDate}
          </Text>
        )}
        {(bill.status === "Unpaid" || bill.status === "On-going") &&
          bill.dueDate && (
            <Text
              style={[
                styles.dateText,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              Due date: {bill.dueDate}
            </Text>
          )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  monthRange: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  billDetails: {
    marginBottom: 10,
  },
  billItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  billIcon: {
    marginRight: 8,
    width: 24,
  },
  billText: {
    fontSize: 16,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  statusTag: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 12,
  },
});

export default BillCard;
