import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import CustomButton from '../component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');

  const AddUserData = () => {
    firestore()
      .collection('Users')
      .add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        Password,
        Password,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Login')
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>{'SignUp'}</Text>
      <TextInput
        value={firstName}
        placeholder="First Name"
        style={styles.input}
        onChangeText={txt => setFirstName(txt)}
      />
      <TextInput
        value={lastName}
        placeholder="Last Name"
        style={styles.input}
        onChangeText={txt => setLastName(txt)}
      />
      <TextInput
        value={email}
        placeholder="Email"
        onChangeText={txt => setEmail(txt)}
        style={styles.input}
      />
      <TextInput
        value={phone}
        placeholder="Phone"
        style={styles.input}
        onChangeText={txt => setPhone(txt)}
      />
      <TextInput
        value={Password}
        placeholder="Password"
        style={styles.input}
        onChangeText={txt => setPassword(txt)}
      />

      <CustomButton
        buttonText={'Submit'}
        bg={'#E27800'}
        onPress={() => AddUserData()}
      />
      <Text onPress={() => navigation.navigate('Login')} style={styles.login}>
        {'Login'}
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
    justifyContent: 'center',
  },
  headTitle: {
    fontSize: rfs(3),
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    paddingVertical: hp(5),
  },
  login: {
    fontSize: rfs(2),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  input: {
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    height: hp(6),
    alignSelf: 'center',
    paddingLeft: wp(3),
    marginBottom: hp(2),
  },
});
