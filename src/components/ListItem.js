import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../styles/theme';
import {AppContext} from '../context/AppContext';

export const ListItem = ({item, index, removeListItem}) => {
  const {data, setData} = useContext(AppContext);
  const canMoveUp = index === 0 ? false : true;
  const canMoveDown = index === data.length - 1 ? false : true;

  const handleMove = direction => {
    let arr = [...data];
    const fromIndex = arr.findIndex(d => d.id === item.id);
    let toIndex = -1;
    switch (direction) {
      case 'up':
        toIndex = fromIndex - 1;
        break;
      case 'down':
        toIndex = fromIndex + 1;
        break;
      default:
    }

    if (toIndex >= arr.length || toIndex < 0) return;

    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    setData(arr);
  };

  const alertBeforeDelete = () => {
    Alert.alert('You are deleting person', 'Are you sure', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => removeListItem({item})},
    ]);
  };

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.renderItemContainer}
      onPress={() => navigation.navigate('Detail', {item: item})}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>{index + 1} </Text>
        <Image
          source={{uri: item.avatar}}
          style={styles.imageStyle}
          resizeMode={'center'}
        />
        <Text>{item.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {canMoveUp && (
          <TouchableOpacity onPress={() => handleMove('up')}>
            <Text style={styles.renderItemButtonText}>↑</Text>
          </TouchableOpacity>
        )}

        {canMoveDown && (
          <TouchableOpacity onPress={() => handleMove('down')}>
            <Text style={styles.renderItemButtonText}>↓</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => alertBeforeDelete()}>
          <Text style={styles.renderItemButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  renderItemContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 10,
    marginTop: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  renderItemButtonText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '600',
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 40,
    height: 40,
  },
});
