import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight as hp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const CheckOutLayout = ({total, item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text>{`(item): ${item}`}</Text>

        <Text style={styles.totalTxt}>{`Total: ₹${total}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkOutBtn}
        onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.btnTxt}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOutLayout;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: hp(8),
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    elevation: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  totalTxt: {
    fontSize: rfs(2.2),
    color: '#000',
  },
  tab: {},
  checkOutBtn: {
    backgroundColor: '#ff9a0c',
    borderRadius: hp(1.2),
    width: '40%',
    height: hp(6),
    marginVertical: hp(4),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: rfs(2.2),
    fontWeight: '700',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
