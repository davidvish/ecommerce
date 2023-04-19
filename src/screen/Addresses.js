import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {globalImagePath} from '../assets/image/globalImagePath';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';

const Addresses = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
        title={'My Address'}
      />
      <TouchableOpacity
        style={styles.addAddress}
        onPress={() => navigation.navigate('AddAddress')}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addAddress: {
    position: 'absolute',
    bottom: hp(1),
    right: hp(1),
    height: hp(7),
    width: hp(7),
    backgroundColor: 'orange',
    borderRadius: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: '#fff',
    fontSize: rfs(5),
  },
});
