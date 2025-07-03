// components/bills/BillDetailSection.tsx
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";
import {
  AssociationDuesDetails,
  ElectricityBillDetails,
  WaterBillDetails,
} from "@/types"; // Import all detail types

// Import the utility functions for calculations and formatting
import {
  calculateAssociationDuesTotal,
  calculateElectricityTotal,
  calculateWaterTotal,
  formatCurrency, // Import formatCurrency
} from "@/hooks/billCalculation"; // Adjust path as needed

interface BillDetailSectionProps {
  title: string;
  iconName: string; // Ionicons name for the section icon (e.g., 'flash-outline')
  details: ElectricityBillDetails | WaterBillDetails | AssociationDuesDetails; // Can be any of the detail types
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const BillDetailSection: React.FC<BillDetailSectionProps> = ({
  title,
  iconName,
  details,
  style,
  titleStyle,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  // Dynamically render details based on type
  const renderDetails = () => {
    if (!details) return null;

    if ("currentKWH" in details) {
      // Electricity details
      const elecDetails = details as ElectricityBillDetails;
      const totalAmount = calculateElectricityTotal(elecDetails); // Calculate total using utility

      return (
        <>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Account Number
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {elecDetails.accountNumber}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Current KWH
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {elecDetails.currentKWH}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Previous KWH
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {elecDetails.previousKWH}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Next Reading
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {elecDetails.nextReadingDate}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Balance From Previous Billing
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(elecDetails.balanceFromPreviousBilling)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Current Charges
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(elecDetails.currentCharges)}
            </Text>
          </View>
          <View style={[styles.detailRow, styles.totalRow]}>
            <Text
              style={[
                styles.detailLabel,
                styles.totalLabel,
                { color: currentThemeColors.text },
              ]}
            >
              Total Amount Due
            </Text>
            {/* Use the calculated total here */}
            <Text
              style={[
                styles.detailValue,
                styles.totalValue,
                { color: currentThemeColors.text },
              ]}
            >
              {formatCurrency(totalAmount)}
            </Text>
          </View>
        </>
      );
    } else if ("currentCUM" in details) {
      // Water details
      const waterDetails = details as WaterBillDetails;
      const totalAmount = calculateWaterTotal(waterDetails); // Calculate total using utility

      return (
        <>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Account Number
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {waterDetails.accountNumber}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Current CU. M.
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {waterDetails.currentCUM}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Previous CU. M.
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {waterDetails.previousCUM}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Next Reading
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {waterDetails.nextReadingDate}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Balance From Previous Billing
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(waterDetails.balanceFromPreviousBilling)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Current Charges
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(waterDetails.currentCharges)}
            </Text>
          </View>
          <View style={[styles.detailRow, styles.totalRow]}>
            <Text
              style={[
                styles.detailLabel,
                styles.totalLabel,
                { color: currentThemeColors.text },
              ]}
            >
              Total Amount Due
            </Text>
            {/* Use the calculated total here */}
            <Text
              style={[
                styles.detailValue,
                styles.totalValue,
                { color: currentThemeColors.text },
              ]}
            >
              {formatCurrency(totalAmount)}
            </Text>
          </View>
        </>
      );
    } else if ("regularDuesMonthlyDues" in details) {
      // Association Dues details
      const assocDetails = details as AssociationDuesDetails;
      const totalAmount = calculateAssociationDuesTotal(assocDetails); // Calculate total using utility

      return (
        <>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Account Number
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {assocDetails.accountNumber}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Due Date
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {assocDetails.dueDate}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Next Reading
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {assocDetails.nextReadingDate}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Regular Dues/Monthly Dues
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(assocDetails.regularDuesMonthlyDues)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Special Assessments
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(assocDetails.specialAssessments)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text
              style={[styles.detailLabel, { color: currentThemeColors.text }]}
            >
              Late Fees/Penalties
            </Text>
            <Text
              style={[
                styles.detailValue,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              {formatCurrency(assocDetails.lateFeesPenalties)}
            </Text>
          </View>
          <View style={[styles.detailRow, styles.totalRow]}>
            <Text
              style={[
                styles.detailLabel,
                styles.totalLabel,
                { color: currentThemeColors.text },
              ]}
            >
              Total Amount Due
            </Text>
            {/* Use the calculated total here */}
            <Text
              style={[
                styles.detailValue,
                styles.totalValue,
                { color: currentThemeColors.text },
              ]}
            >
              {formatCurrency(totalAmount)}
            </Text>
          </View>
        </>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, style]}>
      <Text
        style={[styles.title, { color: currentThemeColors.text }, titleStyle]}
      >
        {title}
      </Text>
      <Text
        style={[styles.subtitle, { color: currentThemeColors.secondaryText }]}
      >
        Bill breakdown:
      </Text>
      {renderDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, // Space after each section
    paddingHorizontal: 20, // Add horizontal padding for alignment
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  detailLabel: {
    fontSize: 15,
  },
  detailValue: {
    fontSize: 15,
    fontWeight: "500",
  },
  totalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: "#3A385E", // Subtle separator
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  totalValue: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BillDetailSection;
