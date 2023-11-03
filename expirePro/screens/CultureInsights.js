import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Bottombar from '../layout/Bottombar';

const InventoryManagementScreen = () => {
  const [inventory, setInventory] = useState([
    { id: 1, itemName: 'Milk', quantity: 2 },
    { id: 2, itemName: 'Bread', quantity: 1 },
    { id: 3, itemName: 'Eggs', quantity: 6 },
    { id: 4, itemName: 'Apples', quantity: 5 },
    { id: 5, itemName: 'Chicken', quantity: 1 },
    { id: 6, itemName: 'Carrots', quantity: 3 },
    { id: 7, itemName: 'Yogurt', quantity: 2 },
    { id: 8, itemName: 'Bananas', quantity: 4 },
    { id: 9, itemName: 'Pasta', quantity: 2 },
    { id: 10, itemName: 'Tomatoes', quantity: 3 },
  ]);

  const markAsConsumed = (itemId) => {
    const updatedInventory = inventory.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setInventory(updatedInventory);
  };

  const markAsDisposed = (itemId) => {
    const updatedInventory = inventory.filter((item) => item.id !== itemId);
    setInventory(updatedInventory);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Inventory Management</Text>
          {inventory.map((item) => (
            <View style={styles.inventoryItem} key={item.id}>
              <Text style={styles.itemName}>{item.itemName}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              <TouchableOpacity
                style={styles.consumedButton}
                onPress={() => markAsConsumed(item.id)}
                disabled={item.quantity === 0}
              >
                <Text style={styles.consumedButtonText}>Mark as Consumed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.disposeButton}
                onPress={() => markAsDisposed(item.id)}
              >
                <Text style={styles.disposeButtonText}>Mark as Disposed</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <Bottombar unreadAlerts={inventory.length} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inventoryItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  consumedButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  consumedButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  disposeButton: {
    backgroundColor: '#ff6347',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  disposeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default InventoryManagementScreen;
