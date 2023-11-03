import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bottombar from '../layout/Bottombar';
import getImageSource from '../helpers/ImageHelper';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, Mukhtar!</Text>
        </View>

        {/* Feature Buttons */}
        <View style={styles.featureButtons}>
          {/* Add Food Item */}
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => {
              navigation.navigate('AddFoodItem'); // Navigate to Add Food Item screen
            }}
          >
            <Image
              source={getImageSource('anime1')}
              style={styles.featureIcon}
            />
            <Text style={styles.featureButtonText}>Add Food Item</Text>
          </TouchableOpacity>

          {/* Expiry Date Notifications */}
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => {
              navigation.navigate('ExpiryDateNotifications'); // Navigate to Expiry Date Notifications screen
            }}
          >
            <Image
              source={getImageSource('anime2')}
              style={styles.featureIcon}
            />
            <Text style={styles.featureButtonText}>Expiry Date Notifications</Text>
          </TouchableOpacity>

          {/* Inventory Management */}
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => {
              navigation.navigate('InventoryManagement'); // Navigate to Inventory Management screen
            }}
          >
            <Image
              source={getImageSource('anime3')}
              style={styles.featureIcon}
            />
            <Text style={styles.featureButtonText}>Inventory Management</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Bottombar unreadAlerts={11} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  featureButtons: {
    flex: 1, // Allow feature buttons to take up available vertical space
    flexDirection: 'column', // Change to column to align them vertically
    justifyContent: 'center', // Vertically center the buttons
    alignItems: 'center', // Horizontally center the buttons
  },
  featureButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    width: '80%',
    paddingVertical: 30, // Add padding vertically
    paddingHorizontal: 25, // Add padding horizontally
    marginVertical: 10, // Add margin between buttons
    alignItems: 'center',
  },
  featureIcon: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  featureButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', // Center align the text
  },
  progressTracker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBar: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    height: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    overflow: 'hidden', // Hide overflowing inner value
  },
  innerValue: {
    height: '100%',
    backgroundColor: 'green', // Change this to your desired inner value color
  },
});

export default Dashboard;
