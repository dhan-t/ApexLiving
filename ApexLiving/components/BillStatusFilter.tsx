// components/bills/BillStatusFilter.tsx
import { Colors } from "@/constants/Colors"; // Adjust path as needed
import { BillStatus } from "@/types"; // Import your BillStatus type
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the dropdown arrow
import React, { useState } from "react";
import {
  Modal, // Import Modal
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

interface BillStatusFilterProps {
  currentFilter: BillStatus | "All";
  onFilterChange: (filter: BillStatus | "All") => void;
}

const BillStatusFilter: React.FC<BillStatusFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility

  const filters: (BillStatus | "All")[] = ["All", "Unpaid", "Paid", "On-going"];

  const handleFilterSelect = (filter: BillStatus | "All") => {
    onFilterChange(filter);
    setDropdownVisible(false); // Close dropdown after selection
  };

  return (
    <View style={styles.wrapper}>
      {" "}
      {/* Wrapper to position the dropdown */}
      <TouchableOpacity
        style={[
          styles.dropdownButton,
          { backgroundColor: currentThemeColors.cardBackground },
        ]}
        onPress={() => setDropdownVisible(true)}
        activeOpacity={0.7}
        accessibilityLabel={`Current filter: ${currentFilter}. Tap to change.`}
      >
        <Text
          style={[
            styles.dropdownButtonText,
            { color: currentThemeColors.text },
          ]}
        >
          {currentFilter}
        </Text>
        <Ionicons
          name={dropdownVisible ? "chevron-up" : "chevron-down"}
          size={16}
          color={currentThemeColors.icon}
          style={styles.dropdownArrow}
        />
      </TouchableOpacity>
      <Modal
        transparent={true} // Makes the background transparent, allowing overlay to show
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)} // For Android back button
        animationType="fade" // Optional: nice fade animation
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setDropdownVisible(false)} // Close dropdown when tapping outside
        >
          <View style={styles.dropdownPositioner}>
            <View
              style={[
                styles.dropdownContainer,
                {
                  backgroundColor: currentThemeColors.cardBackground,
                  borderColor: currentThemeColors.inputBackground, // Use a subtle border
                },
              ]}
            >
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.dropdownItem,
                    currentFilter === filter && {
                      backgroundColor: currentThemeColors.inputBackground,
                    }, // Highlight selected item
                  ]}
                  onPress={() => handleFilterSelect(filter)}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      {
                        color:
                          currentFilter === filter
                            ? currentThemeColors.tint // Tint color for selected
                            : currentThemeColors.text, // Normal text for others
                        fontWeight:
                          currentFilter === filter ? "bold" : "normal",
                      },
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // This wrapper ensures the dropdown button maintains its width and position
    // It's useful if you want to place the dropdown button within a flex row etc.
    // without the dropdown itself affecting the layout until it's open.
    zIndex: 10, // Ensure dropdown appears above other content
    width: 120, // Example width for the dropdown button. Adjust as needed.
    marginRight: 10, // Maintain spacing with other elements in the filter row
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  dropdownButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  dropdownArrow: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center", // Center the dropdown content vertically
    alignItems: "center", // Center the dropdown content horizontally
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
  },
  dropdownPositioner: {
    // This view helps position the actual dropdown box.
    // In a real app, you might want to calculate its position relative to the button dynamically.
    // For now, we'll just center it in the modal.
    width: "80%", // Make the dropdown box take up 80% of the screen width
    maxWidth: 250, // Max width for larger screens
  },
  dropdownContainer: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden", // Ensures borderRadius is applied to children
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  dropdownItemText: {
    fontSize: 15,
  },
});

export default BillStatusFilter;
