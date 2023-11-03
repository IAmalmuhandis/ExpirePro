import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback, FlatList, Platform } from 'react-native';
import Bottombar from '../layout/Bottombar';
import getImageSource from '../helpers/ImageHelper';
import DateTimePicker from '@react-native-community/datetimepicker';
const AddFoodItemScreen = () => {
  const [foodName, setFoodName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFoodAdded, setIsFoodAdded] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showPurchaseDatePicker, setShowPurchaseDatePicker] = useState(false);
  const [showExpiryDatePicker, setShowExpiryDatePicker] = useState(false);

  // Define food categories (you can customize this list)
  const foodCategories = ['Fruits', 'Vegetables', 'Dairy', 'Grains', 'Meat', 'Others'];

  const handleAddFoodItem = () => {
    // Perform validation
    if (!foodName || !selectedCategory) {
      // Show an error message or handle the validation as needed
      return;
    }

    // Handle the action of adding a food item here
    // You can use the state values (foodName, purchaseDate, expiryDate, selectedCategory) to save the food item to your database or state.

    // Example: This simply sets the success message
    setIsFoodAdded(true);

    // Reset the form fields
    setFoodName('');
    setSelectedCategory('');
    setPurchaseDate(new Date());
    setExpiryDate(new Date());
  };

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setShowCategoryModal(false);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    closeCategoryModal();
  };

  const showPurchaseDatepicker = () => {
    setShowPurchaseDatePicker(true);
  };

  const showExpiryDatepicker = () => {
    setShowExpiryDatePicker(true);
  };

  const handlePurchaseDateChange = (event, selectedDate) => {
    setShowPurchaseDatePicker(false);
    if (selectedDate) {
      setPurchaseDate(selectedDate);
    }
  };

  const handleExpiryDateChange = (event, selectedDate) => {
    setShowExpiryDatePicker(false);
    if (selectedDate) {
      setExpiryDate(selectedDate);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* Food Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Food Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter food name"
              value={foodName}
              onChangeText={(text) => setFoodName(text)}
            />
          </View>

          {/* Purchase Date Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Purchase Date:</Text>
            <TouchableOpacity onPress={showPurchaseDatepicker}>
              <Text style={styles.dateText}>
                {purchaseDate.toDateString()}
              </Text>
            </TouchableOpacity>
            {showPurchaseDatePicker && (
              <DateTimePicker
                testID="purchaseDatePicker"
                value={purchaseDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handlePurchaseDateChange}
              />
            )}
          </View>

          {/* Expiry Date Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Expiry Date:</Text>
            <TouchableOpacity onPress={showExpiryDatepicker}>
              <Text style={styles.dateText}>
                {expiryDate.toDateString()}
              </Text>
            </TouchableOpacity>
            {showExpiryDatePicker && (
              <DateTimePicker
                testID="expiryDatePicker"
                value={expiryDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleExpiryDateChange}
              />
            )}
          </View>

          {/* Food Category Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Food Category:</Text>
            <TouchableOpacity onPress={openCategoryModal}>
              <Text style={styles.dropdownText}>{selectedCategory || 'Select Category'}</Text>
            </TouchableOpacity>
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleAddFoodItem}
          >
            <Text style={styles.saveButtonText}>Save Food Item</Text>
          </TouchableOpacity>

          {isFoodAdded && (
            <Text style={styles.successMessage}>Food item added successfully!</Text>
          )}

          {/* Category Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showCategoryModal}
          >
            <TouchableWithoutFeedback onPress={closeCategoryModal}>
              <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <FlatList
                data={foodCategories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => selectCategory(item)}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Modal>
        </ScrollView>
      </View>
      <Bottombar unreadAlerts={11} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 90,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  dateText: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  successMessage: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  categoryItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AddFoodItemScreen;
