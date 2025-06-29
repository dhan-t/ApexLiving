// app/(main-pages)/market/index.tsx
import CategoryButton from "@/components/CattegoryButton"; // <--- Import your new component
import MessageButton from "@/components/MessageButton";
import ProductCard, { ProductCardData } from "@/components/ProductCard";
import ScreenContainer from "@/components/ScreenContainer";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native"; // Import ScrollView

import { DUMMY_PRODUCTS } from "@/data/dummydata"; // Import your dummy data

export default function MarketScreen() {
  const colorScheme = useColorScheme();
  const currentThemeColors = Colors[colorScheme ?? "dark"];

  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDummyData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProducts(DUMMY_PRODUCTS);
      } catch (e) {
        setError("Failed to load dummy products.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadDummyData();
  }, []);

  if (loading) {
    return (
      <ScreenContainer style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={currentThemeColors.tint} />
        <Text style={{ color: currentThemeColors.text, marginTop: 10 }}>
          Loading products...
        </Text>
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer style={styles.errorContainer}>
        <Text style={{ color: currentThemeColors.text }}>Error: {error}</Text>
      </ScreenContainer>
    );
  }

  const services = products.filter((p) => p.id.startsWith("s"));
  const items = products.filter((p) => p.id.startsWith("i"));
  const food = products.filter((p) => p.id.startsWith("f"));
  const units = products.filter((p) => p.id.startsWith("u"));

  const handleCategoriesPress = () => {
    // Define what happens when the Categories button is pressed
    Alert.alert("Categories", "Navigating to categories selection!");
    // You might navigate to a separate categories screen here:
    // router.push('/market/categories');
  };

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainHolder}
      >
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text
            style={[styles.headerTitle, { color: currentThemeColors.text }]}
          >
            Market
          </Text>
          <MessageButton size={24} color={currentThemeColors.icon} />
        </View>

        <CategoryButton
          onPress={handleCategoriesPress}
          title="Categories"
          iconName="list" // The Ionicons name for the list icon
          style={styles.categoriesButtonMargin} // Apply specific margin style here
        />

        {/* Services Section */}
        <Text style={[styles.sectionTitle, { color: currentThemeColors.text }]}>
          Services
        </Text>
        <ScrollView
          horizontal={true} // <--- Enable horizontal scrolling
          showsHorizontalScrollIndicator={false} // <--- Hide the scroll indicator
          contentContainerStyle={styles.horizontalScrollContainer} // <--- Apply styling here
        >
          {services.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              targetRoute={`/market/${product.id}`}
              style={styles.horizontalCard} // <--- Apply horizontal specific styling
            />
          ))}
        </ScrollView>

        {/* Items Section */}
        <Text
          style={[
            styles.sectionTitle,
            { color: currentThemeColors.text, marginTop: 25 },
          ]}
        >
          Items
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}
        >
          {items.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              targetRoute={`/market/${product.id}`}
              style={styles.horizontalCard}
            />
          ))}
        </ScrollView>

        {/* Food Section */}
        <Text
          style={[
            styles.sectionTitle,
            { color: currentThemeColors.text, marginTop: 25 },
          ]}
        >
          Food
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}
        >
          {food.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              targetRoute={`/market/${product.id}`}
              style={styles.horizontalCard}
            />
          ))}
        </ScrollView>

        {/* Units Section */}
        <Text
          style={[
            styles.sectionTitle,
            { color: currentThemeColors.text, marginTop: 25 },
          ]}
        >
          Units
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}
        >
          {units.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              targetRoute={`/market/${product.id}`}
              style={styles.horizontalCard}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  mainHolder: {},

  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 28, fontWeight: "bold" },
  categoriesButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  categoriesButtonText: { marginLeft: 8, fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  categoriesButtonMargin: {
    marginBottom: 20,
  },

  horizontalCard: {
    width: 150, // Fixed width for horizontal cards (adjust as needed)
    marginRight: 15, // Space between cards
  },
  horizontalScrollContainer: {},
});
