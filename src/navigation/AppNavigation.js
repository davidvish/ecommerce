import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';
import ProductDetails from '../screen/ProductDetails';
import Home from '../screen/Home';
import Search from '../screen/Search';
import Cart from '../screen/Cart';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Checkout from '../screen/Checkout';
import Addresses from '../screen/Addresses';
import Addaddress from '../screen/Addaddress';
import Profile from '../screen/Profile';
import OrderSuccess from '../screen/OrderSuccess';
import Order from '../screen/Order';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ProductDetails'}
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Search'}
          component={Search}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Cart'}
          component={Cart}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name={'Login'}
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'SignUp'}
          component={SignUp}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name={'Checkout'}
          component={Checkout}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Address'}
          component={Addresses}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name={'AddAddress'}
          component={Addaddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'Order'}
          component={Order}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'OrderSuccess'}
          component={OrderSuccess}
        />
      </Stack.Navigator>
      
     
    </NavigationContainer>
  );
};

export default AppNavigation;

