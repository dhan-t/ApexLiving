// app/(main-pages)/bills.tsx
import ScreenContainer from "@/components/ScreenContainer"; // Assuming this path
import { Colors } from "@/constants/Colors"; // Adjust path as needed
import { DUMMY_BILL_CYCLES } from "@/data/dummydata"; // Your dummy data
import { BillCycle, BillStatus } from "@/types"; // Your types
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

// Import the new components
import BillCard from "@/components/BillCard";
import BillDateRangeToggle from "@/components/BillDateRangeToggle";
import BillStatusFilter from "@/components/BillStatusFilter";
import MessageButton from "@/components/MessageButton";

export default function BillsScreen() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const [bills, setBills] = useState<BillCycle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentFilter, setCurrentFilter] = useState<BillStatus | "All">("All");
  const [isAscending, setIsAscending] = useState(false); // false means descending (newest first)

  useEffect(() => {
    // Simulate fetching data from a backend
    const fetchBills = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        setBills(DUMMY_BILL_CYCLES); // Use your dummy data
      } catch (err) {
        setError("Failed to load bills. Please try again.");
        console.error("Error fetching bills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []); // Empty dependency array means this runs once on component mount

  // Memoize filtered and sorted bills to prevent unnecessary re-renders
  const filteredAndSortedBills = useMemo(() => {
    let filtered = bills;

    // Apply filter
    if (currentFilter !== "All") {
      filtered = filtered.filter((bill) => bill.status === currentFilter);
    }

    // Apply sorting
    // Sort by due date, converting string to Date objects for accurate comparison
    filtered.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      if (isAscending) {
        return dateA.getTime() - dateB.getTime(); // Ascending (oldest first)
      } else {
        return dateB.getTime() - dateA.getTime(); // Descending (newest first)
      }
    });

    return filtered;
  }, [bills, currentFilter, isAscending]);

  if (loading) {
    return (
      <ScreenContainer style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={currentThemeColors.tint} />
        <Text style={{ color: currentThemeColors.text, marginTop: 10 }}>
          Loading bills...
        </Text>
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer style={styles.centeredContainer}>
        <Text style={{ color: currentThemeColors.text }}>{error}</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle, { color: currentThemeColors.text }]}>
          Bills
        </Text>
        <MessageButton size={24} color={currentThemeColors.icon} />
      </View>

      <View style={styles.toggleButtons}>
        <BillDateRangeToggle
          isAscending={isAscending}
          onToggle={() => setIsAscending((prev) => !prev)}
        />
        <BillStatusFilter
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.billsscrollview}
      >
        {filteredAndSortedBills.length > 0 ? (
          filteredAndSortedBills.map((bill) => (
            <BillCard key={bill.id} bill={bill} />
          ))
        ) : (
          <Text
            style={[
              styles.noBillsText,
              { color: currentThemeColors.secondaryText },
            ]}
          >
            No bills matching your criteria.
          </Text>
        )}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  filterIcon: {
    marginRight: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },

  noBillsText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
  toggleButtons: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  billsscrollview: {
    width: "100%",
  },
});
