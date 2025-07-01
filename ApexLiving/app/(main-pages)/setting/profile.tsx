// app/(main-pages)/settings/profile.tsx
import ScreenContainer from "@/components/ScreenContainer";
import { useLocalSearchParams } from "expo-router"; // To get parameters
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

import EditableInfoRow from "@/components/EditableInfoRow";
import OccupancyRow from "@/components/OccupancyRow";
import PaymentMethodRow from "@/components/PaymentMethodRow";
import ProfileDropdownSection from "@/components/ProfileDropDownSection"; // Now used as a reusable component on this page
import SolidButton from "@/components/SolidButton";
import { Colors } from "@/constants/Colors";
import {
  DUMMY_OCCUPANCY_UNITS,
  DUMMY_PAYMENT_METHODS,
  DUMMY_USER_PROFILE,
} from "@/data/dummydata"; // Import dummy data
import { OccupancyUnit, PaymentMethod, UserProfile } from "@/types";

export default function ProfileDetailsScreen() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];
  const { userId } = useLocalSearchParams(); // Get userId from the route parameters

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [occupancyUnits, setOccupancyUnits] = useState<OccupancyUnit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // In a real app, you would fetch data based on `userId` from your backend:
        // const fetchedProfile = await fetch(`/api/user/${userId}`).then(res => res.json());
        // const fetchedPaymentMethods = await fetch(`/api/user/${userId}/paymentMethods`).then(res => res.json());
        // const fetchedOccupancyUnits = await fetch(`/api/user/${userId}/units`).then(res => res.json());

        // For this example, we'll use dummy data, ensuring it aligns with the passed ID if dynamic
        setUserProfile(DUMMY_USER_PROFILE); // Assuming DUMMY_USER_PROFILE matches the userId for now
        setPaymentMethods(DUMMY_PAYMENT_METHODS);
        setOccupancyUnits(DUMMY_OCCUPANCY_UNITS);
      } catch (e) {
        setError("Failed to load profile data. Please try again.");
        console.error("Error loading profile data:", e);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      // Only load data if a userId is available
      loadProfileData();
    } else {
      setError("No user ID provided.");
      setLoading(false);
    }
  }, [userId]); // Re-run effect if userId changes

  // --- Handlers for database-ready actions ---
  const handleRoleChange = (newRole: UserProfile["role"]) => {
    Alert.alert("Role Changed", `Role updated to: ${newRole}`);
    if (userProfile) {
      setUserProfile({ ...userProfile, role: newRole });
      // Call backend API to update user role
      // updateBackendUserRole(userProfile.id, newRole);
    }
  };

  const handleDeletePaymentMethod = (id: string) => {
    Alert.alert(
      "Delete Payment Method",
      `Are you sure you want to delete this payment method?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setPaymentMethods((prev) =>
              prev.filter((method) => method.id !== id)
            );
            // Call backend API to delete payment method
            // deletePaymentMethodApi(id);
            Alert.alert("Success", "Payment method deleted.");
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleAddPaymentMethod = () => {
    Alert.alert(
      "Add Payment Method",
      "Implement navigation to add new card screen."
    );
    // router.push('/settings/add-payment-method');
  };

  const handleRegisterNewUnit = () => {
    Alert.alert(
      "Register Unit",
      "Implement navigation to register new unit screen."
    );
    // router.push('/settings/register-unit');
  };

  // For individual field edits, these would navigate to new screens
  // where the user can enter new data, which is then sent to the backend.
  const navigateToEditScreen = (field: string, currentValue: string) => {
    Alert.alert(
      `Edit ${field}`,
      `Navigating to screen to edit ${field}. Current value: ${currentValue}`
    );
    // Example: router.push({ pathname: `/settings/edit-${field.toLowerCase()}`, params: { initialValue: currentValue } });
  };
  // --- End Handlers ---

  if (loading) {
    return (
      <ScreenContainer style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={currentThemeColors.tint} />
        <Text style={{ color: currentThemeColors.text, marginTop: 10 }}>
          Loading profile...
        </Text>
      </ScreenContainer>
    );
  }

  if (error || !userProfile) {
    return (
      <ScreenContainer style={styles.errorContainer}>
        <Text style={{ color: currentThemeColors.text }}>
          {error || "Profile data not found."}
        </Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header Section - Now uses ProfileDropdownSection as per Figma*/}
        <Text
          style={[
            styles.sectionHeader,
            { color: currentThemeColors.text, marginTop: 0 },
          ]}
        >
          Profile
        </Text>
        <ProfileDropdownSection
          userProfile={userProfile}
          onRoleChange={handleRoleChange}
          style={styles.componentSpacing}
        />
        <View style={styles.separator} />{" "}
        {/* Separator after profile section */}
        {/* Personal Information Section */}
        <Text
          style={[styles.sectionHeader, { color: currentThemeColors.text }]}
        >
          Personal information
        </Text>
        <EditableInfoRow
          label="Email"
          value={userProfile.email}
          editTargetRoute="/settings/edit-email" // Example route, needs to be defined in _layout.tsx
          onEditPress={() => navigateToEditScreen("Email", userProfile.email)}
        />
        <EditableInfoRow
          label="Pasword" // Typo from Figma, should be "Password"
          value={userProfile.password || ""} // Masked value
          isSensitive={true}
          editTargetRoute="/settings/change-password" // Example route
          onEditPress={() => navigateToEditScreen("Password", "********")}
        />
        <EditableInfoRow
          label="Phone number"
          value={userProfile.phoneNumber}
          editTargetRoute="/settings/edit-phone" // Example route
          onEditPress={() =>
            navigateToEditScreen("Phone number", userProfile.phoneNumber)
          }
          style={styles.lastInfoRow}
        />
        <View style={styles.separator} />
        {/* Billing Section */}
        <Text
          style={[styles.sectionHeader, { color: currentThemeColors.text }]}
        >
          Billing
        </Text>
        <View style={styles.paymentMethodsContainer}>
          {paymentMethods.map((method) => (
            <PaymentMethodRow
              key={method.id}
              paymentMethod={method}
              onDelete={handleDeletePaymentMethod}
            />
          ))}
        </View>
        <SolidButton
          onPress={handleAddPaymentMethod}
          title="Add credit or debit card"
          iconName="card-outline"
          style={styles.componentSpacing}
        />
        <View style={styles.separator} />
        {/* Occupancy Section */}
        <Text
          style={[styles.sectionHeader, { color: currentThemeColors.text }]}
        >
          Occupancy
        </Text>
        <View style={styles.occupancyContainer}>
          {occupancyUnits.map((unit) => (
            <OccupancyRow key={unit.id} unit={unit} />
          ))}
        </View>
        <SolidButton
          onPress={handleRegisterNewUnit}
          title="Register new unit"
          iconName="business-outline"
          style={styles.componentSpacing}
        />
        <View style={{ height: 50 }} /> {/* Extra padding at bottom */}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
  },
  componentSpacing: {
    marginBottom: 20,
  },
  lastInfoRow: {
    marginBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: "#3A385E", // Ensure this matches your Colors.ts for consistency
    width: "100%",
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    marginBottom: 15,
  },
  occupancyContainer: {
    marginBottom: 15,
  },
});
