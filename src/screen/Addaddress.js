import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../component/Header';
import {useNavigation} from '@react-navigation/native';
import {globalImagePath} from '../assets/image/globalImagePath';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import CustomButton from '../component/CustomButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/slices/AddAddressSlices';

const Addaddress = () => {
  const navigation = useNavigation();
  const [type, setType] = useState(0);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
        title={'Add New Address'}
      />
      <View style={{paddingHorizontal: wp(5)}}>
        <TextInput
          value={state}
          onChangeText={txt => setState(txt)}
          placeholder="Enter State"
          style={styles.input}
        />
        <TextInput
          value={city}
          onChangeText={txt => setCity(txt)}
          placeholder="Enter City"
          style={styles.input}
        />
        <TextInput
          value={pinCode}
          onChangeText={txt => setPinCode(txt)}
          placeholder="Enter Pin"
          style={styles.input}
        />
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => setType(1)}
            style={[
              styles.tabView,
              {borderColor: type == 1 ? 'green' : 'black'},
            ]}>
            <Image
              style={[
                styles.radioButton,
                {tintColor: type == 1 ? 'green' : 'black'},
              ]}
              source={
                type == 1
                  ? globalImagePath.radioButtonOn
                  : globalImagePath.radioButton
              }
            />
            <Text style={styles.regTxt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType(2)}
            style={[
              styles.tabView,
              {borderColor: type == 2 ? 'green' : 'black'},
            ]}>
            <Image
              style={[
                styles.radioButton,
                {tintColor: type == 2 ? 'green' : 'black'},
              ]}
              source={
                type == 2
                  ? globalImagePath.radioButtonOn
                  : globalImagePath.radioButton
              }
            />
            <Text style={styles.regTxt}>Office</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          buttonText={'Save Address'}
          bg={'orange'}
          onPress={() => {
            dispatch(
              addAddress({
                state: state,
                city: city,
                pinCode: pinCode,
                type: type == 1 ? 'Home' : 'Office',
              }),
            );
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default Addaddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    height: hp(6),
    alignSelf: 'center',
    paddingLeft: wp(3),
    marginTop: hp(2),
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    width: wp(30),
    alignSelf: 'center',
    height: hp(5),
    justifyContent: 'center',
    borderRadius: hp(5),
  },
  radioButton: {
    height: hp(3),
    width: hp(3),
  },
  regTxt: {
    fontSize: rfs(2),
    color: '#000',
    left: wp(2),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(2),
  },
});
