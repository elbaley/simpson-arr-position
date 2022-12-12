import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
  },
});
