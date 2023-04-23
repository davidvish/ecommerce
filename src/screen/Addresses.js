import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../component/Header';
import {globalImagePath} from '../assets/image/globalImagePath';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {removeAddress} from '../redux/slices/AddAddressSlices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Addresses = () => {
  const navigation = useNavigation();
  const addressList = useSelector(state => state.address);
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('address list', addressList.data);
  }, [isFocused]);

  const dispatch = useDispatch();
  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      '' + item.city + ',' + item.state + ',' + item.pinCode + ',' + item.type,
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
        title={'My Address'}
      />
      <FlatList
        data={addressList.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.tab}
              onPress={() => defaultAddress(item)}>
              <View>
                <Text style={styles.regTxt}>{`${item.type}`}</Text>
                <Text style={styles.regTxt}>{`State: ${item.state}`}</Text>
                <Text style={styles.regTxt}>{`City: ${item.city}`}</Text>
                <Text style={styles.regTxt}>{`Pin Code: ${item.pinCode}`}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AddAddress',{type: 'edit', data:item})
                  }>
                  <Image style={styles.edit} source={globalImagePath.edit} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeAddress(item.id));
                  }}>
                  <Image
                    style={styles.delete}
                    source={globalImagePath.delete}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={styles.addAddress}
        onPress={() => navigation.navigate('AddAddress', {type: 'new'})}>
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
  tab: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    padding: hp(2),
    marginVertical: hp(1),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  regTxt: {
    fontSize: rfs(2.2),
    color: '#000',
  },
  edit: {
    height: hp(2.5),
    width: hp(2.5),
    tintColor: 'blue',
    resizeMode: 'contain',
  },
  delete: {
    height: hp(2.5),
    width: hp(2.5),
    tintColor: 'red',
    resizeMode: 'contain',
    marginTop: hp(1),
  },
});
