// Define base tints, as provided by user
const tintColorLight = "#0a7ea4"; // A vibrant teal/blue, often used for active elements/links
const tintColorDark = "#fff"; // Pure white, often used for active elements/links in dark mode

export const Colors = {
  light: {
    // --- Light Theme Colors ---
    // Text colors
    text: "#11181C", // Very dark gray/black for primary text
    secondaryText: "#6A6A6A", // Medium gray for less prominent text (e.g., descriptions, placeholder)
    primaryHeader: "#1A1A1A", // Slightly darker for headers if needed for contrast

    // Backgrounds
    background: "#fff", // Pure white for main screen background
    cardBackground: "#F5F5F5", // Off-white/very light gray for card backgrounds, to give subtle depth
    inputBackground: "#EBEBEB", // Light gray for input fields

    // Tint and Icon colors
    tint: tintColorLight, // The vibrant teal/blue for selected/active elements
    icon: "#687076", // Darker gray for default icons (non-interactive, placeholders)
    tabIconDefault: "#687076", // Default color for inactive tab icons
    tabIconSelected: tintColorLight, // Color for active tab icons

    // Specific UI element backgrounds
    navbarBG: "#F7F7F7", // Very light gray for bottom navigation bar background

    // Accent colors (can be used for specific icons like electricity/water if they are static)
    accentBlue: "#007BFF", // Bright blue for water icon or other blue accents
    accentYellow: "#F8C000", // Mustard yellow for electricity icon or other yellow accents
  },
  dark: {
    // --- Dark Theme Colors (extracted from HOME SCREEN.png) ---
    // Text colors
    text: "#FFFFFF", // Pure white for primary text (e.g., "Apex Residences", card titles)
    secondaryText: "#C0C0C0", // Light gray for less prominent text (e.g., "No current notification", numbers in cards, "Tenant")
    primaryHeader: "#FFFFFF", // White for headers

    // Backgrounds
    background: "#221E45", // Deep indigo/dark purple for main screen background
    cardBackground: "#FFFFFF", // Pure white for card backgrounds (e.g., "Ongoing Bill Cycle", "Tower A")
    inputBackground: "#3A385E", // A darker purple/indigo for input fields, contrasting with background

    // Tint and Icon colors
    tint: tintColorDark, // Pure white for selected/active elements
    icon: "#FFFFFF", // White for general icons (e.g., chat, bell, active tab icons)
    tabIconDefault: "#9BA1A6", // Lighter gray for inactive tab icons (as per your previous setup)
    tabIconSelected: tintColorDark, // White for active tab icons (matches general icons)

    // Specific UI element backgrounds
    navbarBG: "#3D348B", // Same as main background for the bottom navigation bar

    // Accent colors (for specific elements like electricity/water icons)
    accentBlue: "#007BFF", // Bright blue (for water icon)
    accentYellow: "#F8C000", // Mustard yellow (for electricity icon)
    buttonBackground: "#9B95D1",
    tagsColor: "#3D348B",
  },
};
