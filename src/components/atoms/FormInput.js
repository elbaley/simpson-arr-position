import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, normalize, sizes} from '../../styles/theme';

const FormInput = ({placeholder, value, setValue,multiline}) => {
  return (
    <TextInput
      style={[styles.inputStyle,{textAlignVertical: multiline ? 'top' : 'center'}]}
      placeholder={placeholder}
      value={value}
      onChangeText={text => setValue(text)}
      multiline={multiline}
      numberOfLines={multiline ? 5 : undefined}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    width: sizes.width * 0.9,
    padding: sizes.width * 0.01,
    borderRadius:normalize(5),
    marginTop:sizes.height * 0.01,
    backgroundColor:colors.white
  },
});
