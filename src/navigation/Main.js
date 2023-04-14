import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTab from './Tabs/HomeTab';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeTab"
        component={HomeTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
