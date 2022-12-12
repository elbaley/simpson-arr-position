import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [count, setCount] = useState(0);

  const removeListItem = ({item}) => {
    let newArr = [...data];
    newArr = newArr.filter(arrItem => item.id !== arrItem.id);
    setData(newArr);
    AsyncStorage.setItem('data', JSON.stringify(newArr));
  };

  const getDatas = async () => {
    await AsyncStorage.getItem('data').then(value => {
      if (value != null) {
        setData(JSON.parse(value));
        setLoading(false);
        console.log('ikinci effect');
      }
    });
  };

  useEffect(() => {
    console.log(data.length);

    if (data.length != 0) {
      AsyncStorage.setItem('data', JSON.stringify(data));
      setLoading(false);
      console.log('ilk effect');
    }
  }, [data, setData]);

  useEffect(() => {
    getDatas();
  }, []);

  /*****Loading Start*****/
  useEffect(() => {
    if (loading !== null) {
      AsyncStorage.setItem('loading', `${loading}`);
    }
  }, [loading]);

  useEffect(() => {
    AsyncStorage.getItem('loading').then(value => {
      const newValue = value == 'true' ? true : false;
      if (value) {
        setLoading(newValue);
      }
    });
  }, []);
  /*****Loading End*****/

  const removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        removeItem,
        getDatas,
        removeListItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};
