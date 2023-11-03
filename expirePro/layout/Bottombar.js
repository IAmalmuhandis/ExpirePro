import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import stylesClass, { classes } from '../assets/css/styles';

const Bottombar = ({ unreadAlerts }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottombar}>
      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('Dashboard'); // Leave the "Home" button as it is
        }}
      >
        <FontAwesome name="home" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('AddFoodItem'); // Navigate to Add Food Item screen
        }}
      >
        <FontAwesome name="plus" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Add Food Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('ExpiryDateNotifications'); // Navigate to Expiry Date Notifications screen
        }}
      >
        <FontAwesome name="bell" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('InventoryManagement'); // Navigate to Inventory Management screen
        }}
      >
        <FontAwesome name="list" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Inventory</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('Profile'); // Leave the "Profile" button as it is
        }}
      >
        <FontAwesome name="user" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottombar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: classes.secondaryColor,
  },
  bottombarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottombarText: {
    marginTop: 5,
    fontSize: 10,
    color: classes.tertiaryColor,
  },
});

export default Bottombar;
