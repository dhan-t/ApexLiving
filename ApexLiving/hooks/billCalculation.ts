// utils/billCalculations.ts

import {
  AssociationDuesDetails,
  BillCycle, // Import BillCycle if you're going to use it for grand total
  ElectricityBillDetails,
  WaterBillDetails,
} from "@/types"; // Adjust the path to your types file

/**
 * Calculates the total amount due for an electricity bill breakdown.
 * @param details ElectricityBillDetails object.
 * @returns The total amount due for electricity.
 */
export const calculateElectricityTotal = (
  details: ElectricityBillDetails
): number => {
  return details.balanceFromPreviousBilling + details.currentCharges;
};

/**
 * Calculates the total amount due for a water bill breakdown.
 * @param details WaterBillDetails object.
 * @returns The total amount due for water.
 */
export const calculateWaterTotal = (details: WaterBillDetails): number => {
  return details.balanceFromPreviousBilling + details.currentCharges;
};

/**
 * Calculates the total amount due for association dues breakdown.
 * @param details AssociationDuesDetails object.
 * @returns The total amount due for association dues.
 */
export const calculateAssociationDuesTotal = (
  details: AssociationDuesDetails
): number => {
  return (
    details.regularDuesMonthlyDues +
    details.specialAssessments +
    details.lateFeesPenalties
  );
};

/**
 * Calculates the grand total amount due for a given BillCycle,
 * summing up electricity, water, and association dues if their details are available.
 * This is useful if you want to display a sum of all detailed components on the page.
 * @param bill The BillCycle object containing detailed breakdowns.
 * @returns The grand total amount due.
 */
export const calculateGrandTotalBill = (bill: BillCycle): number => {
  let total = 0;
  if (bill.electricityDetails) {
    total += calculateElectricityTotal(bill.electricityDetails);
  }
  if (bill.waterDetails) {
    total += calculateWaterTotal(bill.waterDetails);
  }
  if (bill.associationDuesDetails) {
    total += calculateAssociationDuesTotal(bill.associationDuesDetails);
  }
  return total;
};

/**
 * Formats a number as Philippine Peso currency string with two decimal places.
 * @param amount The number to format.
 * @returns A formatted currency string (e.g., "₱1,234.56").
 */
export const formatCurrency = (amount: number): string => {
  // Ensure we handle potential NaN or undefined gracefully if passed in
  if (typeof amount !== "number" || isNaN(amount)) {
    return "₱0.00"; // Or some other default/error indication
  }
  return `₱${amount.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
