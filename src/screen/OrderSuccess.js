import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {globalImagePath} from '../assets/image/globalImagePath';
import {
  responsiveHeight as hp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';


const OrderSuccess = () => {
    const navigation = useNavigation();
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigation.navigate('Home')
    
    //     },5000)
    // })
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image
          source={globalImagePath.orderSuccess}
          style={styles.orderSuccess}
        />
        <Text style={styles.text}>Order Placed Successfully...</Text>
        <TouchableOpacity onPress={() =>  navigation.navigate('Home')}>
          <Text style={styles.text}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewRow: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  orderSuccess: {
    height: hp(10),
    width: hp(10),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: rfs(2.5),
    color: '#000',
    top: hp(2),
    textAlign: 'center',
  },
});
