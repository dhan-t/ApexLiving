// app/(main-pages)/market/[id].tsx
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router"; // Stack for header options, useRouter for navigation
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert, // For handling not found
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import { ProductCardData } from "@/components/ProductCard"; // Import the ProductCardData interface
import ScreenContainer from "@/components/ScreenContainer";
import { Colors } from "@/constants/Colors";
import { DUMMY_PRODUCTS } from "@/data/dummydata"; // Import your dummy data

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const [product, setProduct] = useState<ProductCardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundProduct = DUMMY_PRODUCTS.find((p) => p.id === id);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found.");
          Alert.alert("Error", "Product not found.", [
            { text: "Go Back", onPress: () => router.back() },
          ]);
        }
      } catch (e) {
        setError("Failed to load product details.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    } else {
      setLoading(false);
      setError("No product ID provided.");
    }
  }, [id]);

  <Stack.Screen
    options={{
      title: product ? product.title : "Product Details", // Dynamic title
      headerShown: true, // Ensure header is shown for details page
      headerLeft: () => (
        // Custom back button to match Figma if default isn't enough
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={currentThemeColors.text}
          />
        </TouchableOpacity>
      ),
      // Adding a bookmark icon to the right side of the header
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Bookmark", "Bookmark feature not implemented yet!")
          }
          style={{ marginRight: 10 }}
        >
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={currentThemeColors.icon}
          />
        </TouchableOpacity>
      ),
    }}
  />;

  if (loading) {
    return (
      <ScreenContainer style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={currentThemeColors.tint} />
        <Text style={{ color: currentThemeColors.text, marginTop: 10 }}>
          Loading product details...
        </Text>
      </ScreenContainer>
    );
  }

  if (error || !product) {
    return (
      <ScreenContainer style={styles.errorContainer}>
        <Text style={{ color: currentThemeColors.text }}>
          {error || "Product not found."}
        </Text>
      </ScreenContainer>
    );
  }

  const formattedPrice = `₱${product.price.toLocaleString("en-PH")}`;

  return (
    <ScreenContainer noPaddingTop>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 15 }}
      >
        {/* Main Product Image */}
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* Price and Title Section */}
        <View style={styles.infoContainer}>
          <Text style={[styles.priceText, { color: currentThemeColors.text }]}>
            {formattedPrice}
          </Text>
          <Text style={[styles.titleText, { color: currentThemeColors.text }]}>
            {product.title}
          </Text>
          {product.listedOn && product.unit && (
            <Text
              style={[
                styles.metaText,
                { color: currentThemeColors.secondaryText },
              ]}
            >
              Listed on {product.listedOn} • {product.unit}
            </Text>
          )}
        </View>

        {/* Action Buttons: Message and Bookmark */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.messageButton,
              { backgroundColor: currentThemeColors.buttonBackground },
            ]}
            onPress={() =>
              Alert.alert("Message", `Messaging for ${product.title}`)
            }
          >
            <Text
              style={[
                styles.messageButtonText,
                { color: currentThemeColors.text },
              ]}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bookmarkButton,
              { backgroundColor: currentThemeColors.buttonBackground },
            ]}
            onPress={() =>
              Alert.alert("Bookmark", "Bookmark feature not implemented yet!")
            }
          >
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={currentThemeColors.text}
            />
          </TouchableOpacity>
        </View>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text
            style={[styles.sectionTitle, { color: currentThemeColors.text }]}
          >
            Details
          </Text>
          {product.fullDescription && (
            <Text
              style={[
                styles.descriptionText,
                { color: currentThemeColors.text },
              ]}
            >
              {product.fullDescription}
            </Text>
          )}
        </View>

        {/* Tags Section */}
        {product.tags && product.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            <Text
              style={[styles.tagsLabel, { color: currentThemeColors.text }]}
            >
              Tags:
            </Text>
            {product.tags.map((tag) => (
              <View
                key={tag}
                style={[
                  styles.tag,
                  { backgroundColor: currentThemeColors.tagsColor },
                ]}
              >
                <Text
                  style={[styles.tagText, { color: currentThemeColors.text }]}
                >
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: 200, // Adjust height as per your design, or use aspectRatio
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  metaText: {
    fontSize: 14,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  messageButton: {
    flex: 8, // Takes up most of the space
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10, // Space between message and bookmark button
  },
  messageButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookmarkButton: {
    flex: 1,
    paddingVertical: 12,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "200",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 20, // Add space at the bottom for the tab bar
  },
  tagsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 5, // For wrap
  },
  tagText: {
    fontSize: 14,
  },
});
