// Define base tints, as provided by user
// These are the *conceptual* tints. The actual 'tint' property within Colors
// will use iOS-inspired values.
const tintColorLightBase = "#0a7ea4"; // Original user-provided light tint base
const tintColorDarkBase = "#fff"; // Original user-provided dark tint base

export const Colors = {
  light: {
    // --- iOS-Inspired Light Theme Colors ---
    // Text colors
    text: "#000000", // iOS: label - Pure black for primary text
    secondaryText: "#8E8E93", // iOS: secondaryLabel - Medium gray for less prominent text
    primaryHeader: "#000000", // iOS: label - Consistent with primary text for headers

    // Backgrounds
    background: "#FFFFFF", // iOS: systemBackground - Pure white for main screen background
    cardBackground: "#F2F2F7", // iOS: systemGray6 - Very light gray for card backgrounds, subtle depth
    inputBackground: "#E5E5EA", // iOS: systemGray5 - Slightly darker light gray for input fields

    // Tint and Icon colors
    tint: "#007AFF", // iOS: systemBlue - The vibrant blue for selected/active elements
    icon: "#8E8E93", // iOS: systemGray - Default gray for non-interactive icons
    tabIconDefault: "#8E8E93", // iOS: systemGray - Default color for inactive tab icons
    tabIconSelected: "#007AFF", // iOS: systemBlue - Color for active tab icons (matches tint)

    // Specific UI element backgrounds
    navbarBG: "#F8F8F8", // iOS: A very subtle off-white for navigation bars
    buttonBackground: "#E5E5EA", // iOS: systemGray5 - A light gray for general buttons
    tagsColor: "#E5E5EA", // Consistent with button background for subtle tags

    // Accent colors (for specific icons like electricity/water)
    accentBlue: "#007AFF", // iOS: systemBlue - Consistent with tint for blue accents
    accentYellow: "#FFCC00", // iOS: systemYellow - Vibrant yellow for accents

    // Toggle specific colors (iOS style)
    toggleHead: "#FFFFFF", // iOS: White thumb for active toggle
    toggleBodyIn: "#E5E5EA", // iOS: systemGray5 - Inactive track color
    toggleBodyAc: "#007AFF", // iOS: systemBlue - Active track color (matches tint)

    // --- NEW: Bill Status Colors for Light Theme ---
    statusPaid: "#28CD41", // A nice green for Paid
    statusUnpaid: "#FF3B30", // A strong red for Unpaid
    statusOngoing: "#FF9500", // An orange/amber for On-going
    statusText: "#FFFFFF", // White text for status tags
  },
  dark: {
    // --- iOS-Inspired Dark Theme Colors ---
    // Text colors
    text: "#FFFFFF", // iOS: label - Pure white for primary text
    secondaryText: "#8E8E93", // iOS: secondaryLabel - Light gray for less prominent text (appears lighter on dark)
    primaryHeader: "#FFFFFF", // iOS: label - Consistent with primary text for headers

    // Backgrounds
    background: "#1C1C1E", // iOS: systemBackground - Very dark gray for main screen background
    cardBackground: "#2C2C2E", // iOS: secondarySystemBackground - Slightly lighter dark gray for card backgrounds
    inputBackground: "#3A3A3C", // iOS: tertiarySystemBackground - Even lighter dark gray for input fields

    // Tint and Icon colors
    tint: "#FFFFFF", // iOS: label - Pure white for selected/active elements
    icon: "#EBEBF5", // iOS: quaternaryLabel - Very light gray for general icons
    tabIconDefault: "#8E8E93", // iOS: systemGray - Lighter gray for inactive tab icons
    tabIconSelected: "#FFFFFF", // iOS: label - White for active tab icons (matches tint)

    // Specific UI element backgrounds
    navbarBG: "#1C1C1E", // iOS: systemBackground - Often same as main background for seamless look
    buttonBackground: "#3A3A3C", // iOS: tertiarySystemBackground - A darker gray for general buttons
    tagsColor: "#3A3A3C", // Consistent with button background for subtle tags

    // Accent colors (for specific elements like electricity/water icons)
    accentBlue: "#0A84FF", // iOS: systemBlue (dark variant) - Vibrant blue for accents
    accentYellow: "#FFD60A", // iOS: systemYellow (dark variant) - Vibrant yellow for accents

    // Toggle specific colors (iOS style)
    toggleHead: "#FFFFFF", // iOS: White thumb for active toggle
    toggleBodyIn: "#3A3A3C", // iOS: tertiarySystemBackground - Inactive track color
    toggleBodyAc: "#0A84FF", // iOS: systemBlue (dark variant) - Active track color (matches accentBlue)

    // --- NEW: Bill Status Colors for Dark Theme ---
    statusPaid: "#34C759", // A slightly brighter green for Paid in dark mode
    statusUnpaid: "#FF453A", // A slightly brighter red for Unpaid in dark mode
    statusOngoing: "#FF9F0A", // A slightly brighter orange/amber for On-going in dark mode
    statusText: "#1C1C1E", // Dark text for status tags (contrast with bright tags)
  },
};
