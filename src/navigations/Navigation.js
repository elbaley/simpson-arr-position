import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddScreen, DetailScreen, ListScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List Screen">
        <Stack.Screen
          name="List"
          options={{headerTitle: 'Simpsons'}}
          component={ListScreen}
        />
        <Stack.Screen
          name="Detail"
          options={{
            headerTitle: 'Details', 
            headerBackTitleVisible: true}}
          component={DetailScreen}
        />
        <Stack.Screen
          name="Add"
          options={{
            headerTitle: 'Add New Character',
            headerBackTitleVisible: true,
          }}
          component={AddScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
