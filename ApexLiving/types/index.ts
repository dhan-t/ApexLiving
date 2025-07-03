// types/index.ts

export interface UserProfile {
  id: string;
  fullName: string;
  role: "Tenant" | "Owner"; // Or an enum if more roles are possible
  email: string;
  password?: string; // Should ideally not be stored or passed, but for UI representation masking purposes
  phoneNumber: string;
}

export interface PaymentMethod {
  id: string;
  bankName: string;
  lastFourDigits: string;
  type: "Credit Card" | "Debit Card" | "E-Wallet";
  // Add other fields like expiration date, card network (Visa/MC) if needed for real app
}

export interface OccupancyUnit {
  id: string;
  role: "Owner" | "Tenant";
  unitNumber: string;
  tower: string;
}

export type BillStatus = "Paid" | "Unpaid" | "On-going";

export interface BillBreakdownItem {
  label: string;
  value: string; // Can be string for numbers with currency, or actual number
}

export interface ElectricityBillDetails {
  accountNumber: string;
  currentKWH: number;
  previousKWH: number;
  nextReadingDate: string; // e.g., "10 March 2025"
  balanceFromPreviousBilling: number;
  currentCharges: number;
  totalAmountDue: number;
}

export interface WaterBillDetails {
  accountNumber: string;
  currentCUM: number; // Current Cubic Meter
  previousCUM: number; // Previous Cubic Meter
  nextReadingDate: string;
  balanceFromPreviousBilling: number;
  currentCharges: number;
  totalAmountDue: number;
}

export interface AssociationDuesDetails {
  accountNumber: string;
  dueDate: string;
  nextReadingDate: string;
  regularDuesMonthlyDues: number;
  specialAssessments: number;
  lateFeesPenalties: number;
  totalAmountDue: number;
}

// Extend BillCycle to include detailed breakdown
export interface BillCycle {
  id: string;
  monthRange: string;
  electricity: number; // Summary amount
  water: number; // Summary amount
  associationDues: number; // Summary amount
  status: BillStatus;
  dueDate: string;
  paidDate: string | null;
  // NEW: Detailed breakdown
  electricityDetails?: ElectricityBillDetails;
  waterDetails?: WaterBillDetails;
  associationDuesDetails?: AssociationDuesDetails;
}
