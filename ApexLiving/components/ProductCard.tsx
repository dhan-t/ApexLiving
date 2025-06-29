// components/ProductCard.tsx
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native"; // Added ViewStyle

// Define the shape of data this card expects, extended for details page
export interface ProductCardData {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description?: string; // Short description for card
  listedOn?: string; // e.g., "3/11"
  unit?: string; // e.g., "Unit 3321"
  fullDescription?: string; // Long description for details page
  tags?: string[]; // e.g., ["Service"]
  // Add more fields here as needed for future products
}

interface ProductCardProps {
  data: ProductCardData;
  targetRoute?: string;
  onPress?: (data: ProductCardData) => void;
  style?: ViewStyle;
}

const ProductCard: React.FC<ProductCardProps> = ({
  data,
  targetRoute,
  onPress,
  style,
}) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const handlePress = () => {
    if (onPress) {
      onPress(data);
    } else {
      router.push(targetRoute || `/market/${data.id}`);
    }
  };

  const formattedPrice = `₱${data.price.toLocaleString("en-PH")}`;

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: "transparent" }, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: data.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.priceText, { color: currentThemeColors.text }]}>
          {formattedPrice}
        </Text>
        <Text
          style={[styles.titleText, { color: currentThemeColors.text }]}
          numberOfLines={2}
        >
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "40%",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 8,
  },
  priceText: {
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 2,
  },
  titleText: {
    fontSize: 14,
  },
});

export default ProductCard;
