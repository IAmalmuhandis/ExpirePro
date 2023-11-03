import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Bottombar from '../layout/Bottombar';

const ExpiryDateNotificationsScreen = () => {
  // Dummy expiration notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, itemName: 'Milk', expiryDate: '2023-11-30' },
    { id: 2, itemName: 'Bread', expiryDate: '2023-12-05' },
    { id: 3, itemName: 'Eggs', expiryDate: '2023-12-10' },
    { id: 4, itemName: 'Apples', expiryDate: '2023-11-25' },
    { id: 5, itemName: 'Chicken', expiryDate: '2023-11-27' },
    { id: 6, itemName: 'Carrots', expiryDate: '2023-12-03' },
    { id: 7, itemName: 'Yogurt', expiryDate: '2023-12-07' },
    { id: 8, itemName: 'Bananas', expiryDate: '2023-12-01' },
    { id: 9, itemName: 'Pasta', expiryDate: '2023-11-28' },
    { id: 10, itemName: 'Tomatoes', expiryDate: '2023-12-15' },
  ]);

  const removeItem = (itemId) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== itemId);
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Expiry Date Notifications</Text>
          {notifications.map((notification) => (
            <View style={styles.notificationCard} key={notification.id}>
              <Text style={styles.itemName}>{notification.itemName}</Text>
              <Text style={styles.expiryDate}>
                Expires on: {notification.expiryDate}
              </Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeItem(notification.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <Bottombar unreadAlerts={notifications.length} />
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
  notificationCard: {
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
  expiryDate: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: '#ff6347',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ExpiryDateNotificationsScreen;
