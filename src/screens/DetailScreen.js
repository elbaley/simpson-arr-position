import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {colors, normalize, sizes} from '../styles/theme';

const DetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image
          source={{uri: item.avatar}}
          style={styles.imageStyle}
          resizeMode={'contain'}
        />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.jobText}>{item.job}</Text>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: sizes.width * 0.5,
    height: sizes.height * 0.4,
  },
  nameText: {
    fontSize: normalize(20),
    fontWeight: '600',
    color: colors.black,
    marginTop: sizes.height * 0.01,
  },
  jobText: {
    fontSize: normalize(16),
    fontWeight: '600',
    marginTop: sizes.height * 0.01,
  },
  descriptionWrapper: {
    margin: sizes.width * 0.02,
  },
  descriptionText: {
    lineHeight: normalize(18),
    textAlign: 'left',
  },
});
