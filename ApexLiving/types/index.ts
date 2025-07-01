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
