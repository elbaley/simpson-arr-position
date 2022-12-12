import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {MockService} from '../services';
import AddButton from '../components/AddButton';
import {ListItem} from '../components/ListItem';
import {AppContext} from '../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = ({navigation}) => {
  const {data, setData, loading, setLoading, removeItem, removeListItem} =
    useContext(AppContext);

  const {getData} = MockService();
  const handleGetData = async () => {
    if (data == null || (data && data.length == 0)) {
      await getData()
        .then(response => {
          if (response.status == 200) {
            setData(response.data);
          } else {
            setLoading(false);
          }
        })
        .then(() => setLoading(false));
    } else {
      return null;
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('data').then(value => {
      if (value == null || (value && value.length < 3)) {
        handleGetData();
      } else {
        setLoading(false);
      }
    });
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <ListItem item={item} index={index} removeListItem={removeListItem} />
    );
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator color={'blue'} size="large" />
      ) : (
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}

      <AddButton onPress={() => navigation.navigate('Add')} />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {},
});
