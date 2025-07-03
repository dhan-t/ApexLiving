// data/dummyData.ts

import { ProductCardData } from "@/components/ProductCard";
import {
  AssociationDuesDetails,
  BillCycle,
  ElectricityBillDetails,
  OccupancyUnit,
  PaymentMethod,
  UserProfile, // Ensure these are imported from your types file
  WaterBillDetails,
} from "@/types"; // Changed to "@/types" if index is default export

export const DUMMY_PRODUCTS: ProductCardData[] = [
  {
    id: "s1",
    imageUrl: "https://picsum.photos/id/111/200/200", // Specific image for bike service
    price: 1000,
    title: "Home service bike service",
    listedOn: "3/11", //
    unit: "Unit 3321", //
    fullDescription:
      "Tired of hauling your bike to the shop? Get pro bike servicing right at your doorstep! From tune-ups to flat fixes, I come to you. Servicing for all bike types. DM for rates and scheduling! #BikeRepairPH #MobileBikeMechanic #HomeService", //
    tags: ["Service"], //
  },
  {
    id: "s2",
    imageUrl: "https://picsum.photos/id/123/200/200",
    price: 1000,
    title: "Tutoring Services - Math & Science",
    listedOn: "3/10",
    unit: "Unit 102",
    fullDescription:
      "Experienced tutor offering personalized sessions in Math and Science for all levels. Online and in-person options available. Improve your grades and understanding!",
    tags: ["Education", "Service"],
  },
  {
    id: "s3",
    imageUrl: "https://picsum.photos/id/125/200/200",
    price: 1000,
    title: "Pet-Sitting Services Available",
    listedOn: "3/08",
    unit: "Unit 505",
    fullDescription:
      "Reliable and loving pet sitter available for daily visits or overnight stays. Dogs, cats, and small animals welcome. Fully insured.",
    tags: ["Pets", "Service"],
  },
  {
    id: "i1",
    imageUrl: "https://picsum.photos/id/127/200/200",
    price: 1000,
    title: "Gently Used Coffee Maker",
    listedOn: "3/05",
    unit: "Unit 707",
    fullDescription:
      "Selling a gently used coffee maker. Works perfectly, just upgraded to a new one. Comes with reusable filter.",
    tags: ["Home", "Appliance"],
  },
  {
    id: "i2",
    imageUrl: "https://picsum.photos/id/129/200/200",
    price: 1000,
    title: "Bookshelf - Excellent Condition",
    listedOn: "3/03",
    unit: "Unit 808",
    fullDescription:
      "Sturdy wooden bookshelf, excellent condition. Perfect for your home office or living room. Dimensions: 60x20x180cm.",
    tags: ["Furniture", "Home"],
  },
  {
    id: "i3",
    imageUrl: "https://picsum.photos/id/130/200/200",
    price: 1000,
    title: "Brand New Yoga Mat",
    listedOn: "3/01",
    unit: "Unit 909",
    fullDescription:
      "Unopened, brand new yoga mat. Great for all types of yoga and fitness routines. Standard size.",
    tags: ["Sports", "Fitness"],
  },
  {
    id: "f1",
    imageUrl: "https://picsum.photos/id/131/200/200",
    price: 1000,
    title: "Homemade Empanadas (Chicken & Beef)",
    listedOn: "2/28",
    unit: "Unit 101",
    fullDescription:
      "Delicious homemade empanadas. Available in chicken and beef fillings. Perfect for snacks or parties. Order now!",
    tags: ["Food", "Homemade"],
  },
  {
    id: "f2",
    imageUrl: "https://picsum.photos/id/132/200/200",
    price: 1000,
    title: "Freshly Baked Banana Bread",
    listedOn: "2/27",
    unit: "Unit 202",
    fullDescription:
      "Warm, moist, and delicious banana bread, baked fresh daily. Great for breakfast or dessert.",
    tags: ["Food", "BakedGoods"],
  },
  {
    id: "f3",
    imageUrl: "https://picsum.photos/id/133/200/200",
    price: 1000,
    title: "Extra Homemade Chili",
    listedOn: "2/25",
    unit: "Unit 303",
    fullDescription:
      "Hearty and flavorful homemade chili. Perfect for a quick meal. Available in mild and spicy.",
    tags: ["Food", "Meal"],
  },
  {
    id: "u1",
    imageUrl: "https://picsum.photos/id/134/200/200",
    price: 1000,
    title: "FOR SALE: Spacious 2BR Unit - Tower A, Unit 12B",
    description: "Tower A, Unit 12B",
    listedOn: "2/20",
    unit: "Tower A, Unit 12B",
    fullDescription:
      "Spacious 2-bedroom unit with modern amenities. Great view, prime location. Ideal for families or professionals.",
    tags: ["Real Estate", "For Sale"],
  },
  {
    id: "u2",
    imageUrl: "https://picsum.photos/id/135/200/200",
    price: 1000,
    title: "Cozy Studio Unit for Sale - Tower A, Unit 10D",
    description: "Tower A, Unit 10D",
    listedOn: "2/18",
    unit: "Tower A, Unit 10D",
    fullDescription:
      "Compact and cozy studio unit, perfect for singles or couples. Convenient location with easy access to amenities.",
    tags: ["Real Estate", "For Sale"],
  },
  {
    id: "u3",
    imageUrl: "https://picsum.photos/id/136/200/200",
    price: 1000,
    title: "Penthouse with Stunning City Views",
    description: "Tower B, Unit PH-01",
    listedOn: "2/15",
    unit: "Tower B, Unit PH-01",
    fullDescription:
      "Luxurious penthouse unit offering breathtaking city views. Expansive living spaces and premium finishes.",
    tags: ["Real Estate", "Luxury"],
  },
];

export const DUMMY_BILLS_SUMMARY = [
  {
    type: "Electricity",
    amount: 1500,
    icon: "⚡",
  },
  {
    type: "Water",
    amount: 500,
    icon: "💧",
  },
  {
    type: "Association Dues",
    amount: 1000,
    icon: "🏢",
  },
];

export const DUMMY_PAYMENT_METHODS: PaymentMethod[] = [
  { id: "pm1", bankName: "PNB", lastFourDigits: "0000", type: "Credit Card" },
  { id: "pm2", bankName: "BPI", lastFourDigits: "0000", type: "Debit Card" },
  { id: "pm3", bankName: "GCash", lastFourDigits: "0000", type: "E-Wallet" },
];

export const DUMMY_OCCUPANCY_UNITS: OccupancyUnit[] = [
  { id: "ou1", role: "Owner", unitNumber: "1001", tower: "Tower A" }, // Matches the image
  { id: "ou2", role: "Owner", unitNumber: "1001", tower: "Tower A" }, // Matches the image
];

export const DUMMY_USER_PROFILE: UserProfile = {
  id: "user-dhan-tamparong-123",
  fullName: "Dhan Tamparong",
  role: "Tenant", // Initial role, matches the Figma
  email: "dhan.tamparong@gmail.com",
  phoneNumber: "+639998887777",
  // Password is not stored/sent in real apps, but for dummy UI representation:
  // password: 'secure_password_hash',
};

export const DUMMY_BILL_CYCLES: BillCycle[] = [
  {
    id: "bill-1",
    monthRange: "January - February",
    electricity: 1900,
    water: 500,
    associationDues: 1000,
    status: "Paid",
    dueDate: "February 10, 2025",
    paidDate: "February 10, 2025",
    electricityDetails: {
      accountNumber: "174451556-8",
      currentKWH: 100,
      previousKWH: 30,
      nextReadingDate: "10 February 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 11900,
      // Removed: totalAmountDue: 1900,
    } as ElectricityBillDetails,
    waterDetails: {
      accountNumber: "335-005-729",
      currentCUM: 30,
      previousCUM: 10,
      nextReadingDate: "10 February 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 500,
      // Removed: totalAmountDue: 1900,
    } as WaterBillDetails,
    associationDuesDetails: {
      accountNumber: "1132135",
      dueDate: "10 February 2025",
      nextReadingDate: "10 February 2025",
      regularDuesMonthlyDues: 1000,
      specialAssessments: 0,
      lateFeesPenalties: 0,
      // Removed: totalAmountDue: 1900,
    } as AssociationDuesDetails,
  },
  {
    id: "bill-2",
    monthRange: "March - April",
    electricity: 1500,
    water: 500,
    associationDues: 1000,
    status: "On-going",
    dueDate: "April 15, 2025",
    paidDate: null,
    electricityDetails: {
      accountNumber: "174451556-9",
      currentKWH: 115,
      previousKWH: 45,
      nextReadingDate: "10 April 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 1500,
      // Removed: totalAmountDue: 1500,
    } as ElectricityBillDetails,
    waterDetails: {
      accountNumber: "335-005-730",
      currentCUM: 45,
      previousCUM: 20,
      nextReadingDate: "10 April 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 500,
      // Removed: totalAmountDue: 500,
    } as WaterBillDetails,
    associationDuesDetails: {
      accountNumber: "1132136",
      dueDate: "15 March 2025",
      nextReadingDate: "10 April 2025",
      regularDuesMonthlyDues: 1000,
      specialAssessments: 0,
      lateFeesPenalties: 0,
      // Removed: totalAmountDue: 1000,
    } as AssociationDuesDetails,
  },
  {
    id: "bill-3",
    monthRange: "March - April",
    electricity: 1500,
    water: 500,
    associationDues: 1000,
    status: "On-going",
    dueDate: "April 15, 2025",
    paidDate: null,
    electricityDetails: {
      accountNumber: "174451556-9",
      currentKWH: 115,
      previousKWH: 45,
      nextReadingDate: "10 April 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 1500,
      // Removed: totalAmountDue: 1500,
    } as ElectricityBillDetails,
    waterDetails: {
      accountNumber: "335-005-730",
      currentCUM: 45,
      previousCUM: 20,
      nextReadingDate: "10 April 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 500,
      // Removed: totalAmountDue: 500,
    } as WaterBillDetails,
    associationDuesDetails: {
      accountNumber: "1132136",
      dueDate: "15 March 2025",
      nextReadingDate: "10 April 2025",
      regularDuesMonthlyDues: 1000,
      specialAssessments: 0,
      lateFeesPenalties: 0,
      // Removed: totalAmountDue: 1000,
    } as AssociationDuesDetails,
  },
  {
    id: "bill-4",
    monthRange: "April - May",
    electricity: 1600,
    water: 550,
    associationDues: 1000,
    status: "Paid",
    dueDate: "May 10, 2025",
    paidDate: "May 9, 2025",
    electricityDetails: {
      accountNumber: "174451556-10",
      currentKWH: 120,
      previousKWH: 50,
      nextReadingDate: "10 May 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 1600,
      // Removed: totalAmountDue: 1600,
    } as ElectricityBillDetails,
    waterDetails: {
      accountNumber: "335-005-731",
      currentCUM: 50,
      previousCUM: 25,
      nextReadingDate: "10 May 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 550,
      // Removed: totalAmountDue: 550,
    } as WaterBillDetails,
    associationDuesDetails: {
      accountNumber: "1132137",
      dueDate: "10 May 2025",
      nextReadingDate: "10 May 2025",
      regularDuesMonthlyDues: 1000,
      specialAssessments: 0,
      lateFeesPenalties: 0,
      // Removed: totalAmountDue: 1000,
    } as AssociationDuesDetails,
  },
  {
    id: "bill-5",
    monthRange: "May - June",
    electricity: 1700,
    water: 600,
    associationDues: 1000,
    status: "Unpaid",
    dueDate: "June 20, 2025",
    paidDate: null,
    electricityDetails: {
      accountNumber: "174451556-11",
      currentKWH: 125,
      previousKWH: 55,
      nextReadingDate: "10 June 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 1700,
      // Removed: totalAmountDue: 1700,
    } as ElectricityBillDetails,
    waterDetails: {
      accountNumber: "335-005-732",
      currentCUM: 55,
      previousCUM: 30,
      nextReadingDate: "10 June 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 600,
      // Removed: totalAmountDue: 600,
    } as WaterBillDetails,
    associationDuesDetails: {
      accountNumber: "1132138",
      dueDate: "20 June 2025",
      nextReadingDate: "10 June 2025",
      regularDuesMonthlyDues: 1000,
      specialAssessments: 0,
      lateFeesPenalties: 0,
      // Removed: totalAmountDue: 1000,
    } as AssociationDuesDetails,
  },
  {
    id: "bill-6",
    monthRange: "June - July",
    electricity: 1800,
    water: 650,
    associationDues: 1000,
    status: "On-going",
    dueDate: "July 25, 2025",
    paidDate: null,
    electricityDetails: {
      accountNumber: "174451556-12",
      currentKWH: 130,
      previousKWH: 60,
      nextReadingDate: "10 July 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 1800,
      // Removed: totalAmountDue: 1800,
    } as ElectricityBillDetails,
    waterDetails: {
      accountNumber: "335-005-733",
      currentCUM: 60,
      previousCUM: 35,
      nextReadingDate: "10 July 2025",
      balanceFromPreviousBilling: 0,
      currentCharges: 650,
      // Removed: totalAmountDue: 650,
    } as WaterBillDetails,
    associationDuesDetails: {
      accountNumber: "1132139",
      dueDate: "25 July 2025",
      nextReadingDate: "10 July 2025",
      regularDuesMonthlyDues: 1000,
      specialAssessments: 0,
      lateFeesPenalties: 0,
      // Removed: totalAmountDue: 1000,
    } as AssociationDuesDetails,
  },
];
