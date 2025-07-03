// app/(main-pages)/bills/[id].tsx

import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

// Local imports
import ScreenContainer from "@/components/ScreenContainer";

import { Colors } from "@/constants/Colors";
import { DUMMY_BILL_CYCLES } from "@/data/dummydata"; // Import your dummy data
import { BillCycle } from "@/types"; // Import BillCycle interface

// Import new components
import BillActionButton from "@/components/BillActionButton";
import BillCard from "@/components/BillCard";
import BillDetailSection from "@/components/BillDetailSection";

// Import the utility functions for calculations
import {
  calculateGrandTotalBill,
  formatCurrency,
} from "@/hooks/billCalculation";

export default function BillDetailsPage() {
  const { id } = useLocalSearchParams(); // Get the bill ID from the URL
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const [billDetails, setBillDetails] = useState<BillCycle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // For dummy data, find the bill by ID
        const foundBill = DUMMY_BILL_CYCLES.find((bill) => bill.id === id);

        if (foundBill) {
          // Ensure that if a bill is found, it has detailed breakdown (for dummy data purposes)
          // In a real app, your API would return this, or you'd fetch it separately.
          // This ensures that the conditional rendering in JSX below works for ALL bills
          // after you've updated dummydata.ts as suggested previously.
          if (
            !foundBill.electricityDetails ||
            !foundBill.waterDetails ||
            !foundBill.associationDuesDetails
          ) {
            // Optional: If you want to show a message if details are missing, or fall back
            // For this example, we assume dummydata.ts is fully populated for all BillCycles.
            console.warn(`Detailed bill info missing for bill ID: ${id}`);
          }
          setBillDetails(foundBill);
        } else {
          setError("Bill not found.");
          Alert.alert("Error", "Bill details not found.", [{ text: "OK" }]);
        }
      } catch (e) {
        setError("Failed to load bill details.");
        console.error("Error loading bill details:", e);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBillDetails();
    } else {
      setError("No bill ID provided.");
      setLoading(false);
    }
  }, [id]); // Re-run effect if bill ID changes

  // --- Button Logic (for backend readiness) ---
  const handleViewFullElectricityBill = () => {
    Alert.alert(
      "View Full Bill",
      "Navigating to full electricity bill PDF/page."
    );
    // In a real app, you'd navigate to a PDF viewer or a dedicated page
    // router.push(`/bills/${billDetails?.id}/electricity-pdf`);
  };

  const handleViewFullWaterBill = () => {
    Alert.alert("View Full Bill", "Navigating to full water bill PDF/page.");
  };

  const handleViewFullAssociationBill = () => {
    Alert.alert(
      "View Full Bill",
      "Navigating to full association bill PDF/page."
    );
  };

  const handlePayBills = () => {
    Alert.alert(
      "Pay Bills",
      "Initiating payment process for all unpaid bills."
    );
    // In a real app, this would trigger a payment flow
    // router.push(`/payment-gateway?billId=${billDetails?.id}`);
  };
  // --- End Button Logic ---

  if (loading) {
    return (
      <ScreenContainer style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={currentThemeColors.tint} />
        <Text style={{ color: currentThemeColors.text, marginTop: 10 }}>
          Loading bill details...
        </Text>
      </ScreenContainer>
    );
  }

  if (error || !billDetails) {
    return (
      <ScreenContainer style={styles.centeredContainer}>
        <Text style={{ color: currentThemeColors.text }}>
          {error || "Bill details not found."}
        </Text>
      </ScreenContainer>
    );
  }

  // Calculate the grand total using the utility function
  const grandTotalDue = calculateGrandTotalBill(billDetails);

  return (
    <ScreenContainer>
      {/* Set header title dynamically */}
      <Stack.Screen
        options={{
          title: billDetails ? billDetails.monthRange : "Bill Details",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Summary Bill Card at the top */}
        <BillCard bill={billDetails} />
        {/* Bill Breakdown Title */}
        <Text style={[styles.sectionTitle, { color: currentThemeColors.text }]}>
          {billDetails.monthRange}
        </Text>
        <Text
          style={[
            styles.sectionSubtitle,
            { color: currentThemeColors.secondaryText },
          ]}
        >
          Bill breakdown:
        </Text>
        {/* Electricity Section */}
        {billDetails.electricityDetails && (
          <>
            <BillDetailSection
              title="Electricity"
              iconName="flash-outline"
              details={billDetails.electricityDetails}
            />
            <BillActionButton
              title="View Full Electricity Bill"
              onPress={handleViewFullElectricityBill}
              style={styles.actionButton}
            />
          </>
        )}
        {/* Water Section */}
        {billDetails.waterDetails && (
          <>
            <BillDetailSection
              title="Water"
              iconName="water-outline"
              details={billDetails.waterDetails}
            />
            <BillActionButton
              title="View Full Water Bill"
              onPress={handleViewFullWaterBill}
              style={styles.actionButton}
            />
          </>
        )}
        {/* Association Dues Section */}
        {billDetails.associationDuesDetails && (
          <>
            <BillDetailSection
              title="Association Dues"
              iconName="business-outline"
              details={billDetails.associationDuesDetails}
            />
            <BillActionButton
              title="View Full Association Bill"
              onPress={handleViewFullAssociationBill}
              style={styles.actionButton}
            />
          </>
        )}
        {/* Grand Total Display */}
        {grandTotalDue > 0 && ( // Only show if there's a total due
          <View
            style={[
              styles.grandTotalContainer,
              { backgroundColor: currentThemeColors.cardBackground },
            ]}
          >
            <Text
              style={[
                styles.grandTotalLabel,
                { color: currentThemeColors.text },
              ]}
            >
              Grand Total Due:
            </Text>
            <Text
              style={[
                styles.grandTotalValue,
                { color: currentThemeColors.tint },
              ]}
            >
              {formatCurrency(grandTotalDue)}
            </Text>
          </View>
        )}
        {/* Pay Bills Button */}
        <BillActionButton
          title="Pay bills"
          onPress={handlePayBills}
          isPrimary={true} // Make it a primary action button
          style={styles.payBillsButton}
        />
        <View style={{ height: 50 }} /> {/* Extra padding at bottom */}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    paddingBottom: 20, // Padding at the bottom of the scrollable content
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10, // Space from the summary card
    paddingHorizontal: 20, // Align with ScreenContainer
  },
  sectionSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20, // Align with ScreenContainer
  },
  actionButton: {
    marginHorizontal: 20, // Align with ScreenContainer
    marginBottom: 10, // Space between "View Full" buttons and next section
  },
  grandTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20, // To align with screen container padding
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1, // Add a border for emphasis
    borderColor: "#3A385E", // Match theme or pick a highlight color
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  grandTotalValue: {
    fontSize: 22,
    fontWeight: "bold",
  },
  payBillsButton: {
    marginTop: 20, // Space above "Pay bills" button
    marginHorizontal: 20, // Align with ScreenContainer
  },
});
