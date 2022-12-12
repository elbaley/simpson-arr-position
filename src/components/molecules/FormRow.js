import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormTitle from '../atoms/FormTitle';
import FormInput from '../atoms/FormInput';
import {sizes} from '../../styles/theme';

const FormRow = ({title, value, setValue, multiline}) => {
  return (
    <View style={styles.container}>
      <FormTitle title={title} />
      <FormInput value={value} setValue={setValue} multiline={multiline} />
    </View>
  );
};

export default FormRow;

const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    margin: sizes.width * 0.03,
    marginHorizontal: sizes.width * 0.04,
  },
});
