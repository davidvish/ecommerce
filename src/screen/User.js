import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalImagePath} from '../assets/image/globalImagePath';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import Header from '../component/Header';
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title={'Profile'} />
      <Image style={styles.avatar} source={globalImagePath.avatar} />
      <Text style={styles.nameTxt}>{'David Vishwakarma'}</Text>
      <Text style={styles.nameTxt}>{'david.vishwakarma@gmail.com'}</Text>
      <View style={{marginTop:hp(5)}}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTxt}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=> navigation.navigate('Order') }>
          <Text style={styles.tabTxt}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTxt}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTxt}>Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: hp(10),
    width: hp(10),
    alignSelf: 'center',
    marginVertical: hp(5),
  },
  nameTxt: {
    fontSize: rfs(2.5),
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  tab: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: wp(80),
    alignSelf: 'center',
    height: hp(6),
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  tabTxt: {
    fontSize: rfs(2),
    fontWeight: '400',
    color: '#000',
  },
});
