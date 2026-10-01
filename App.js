import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: '$59' },
  { id: '2', name: 'Smart Watch', price: '$120' },
  { id: '3', name: 'Backpack', price: '$35' },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Manahil Fatima</Text>
      <Text style={styles.roll}>Roll No: 23i-3053</Text>
      <Text style={styles.title}>Product Explorer</Text>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search products"
        accessibilityLabel="Search products"
        autoCapitalize="none"
        autoCorrect={false}
        inputMode="search"
        enterKeyHint="search"
        clearButtonMode="while-editing"
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 80, paddingHorizontal: 20 },
  name: { fontSize: 28, fontWeight: '800', color: '#4f46e5' },
  roll: { fontSize: 18, marginBottom: 20, color: '#444' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  searchInput: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16, marginBottom: 12 },
  card: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginBottom: 10, borderRadius: 12, backgroundColor: '#f3f4f6' },
  cardName: { fontSize: 16 },
  cardPrice: { fontSize: 16, fontWeight: '700' },
});
