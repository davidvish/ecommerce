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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userCheck = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs[0]._data);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>{'Already Account'}</Text>
      <TextInput
        value={email}
        onChangeText={txt => setEmail(txt)}
        placeholder="Enter Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={txt => setPassword(txt)}
        placeholder="Password"
        style={styles.input}
      />

      <CustomButton
        buttonText={'Login'}
        bg={'#E27800'}
        onPress={() => userCheck()}
      />
      <Text onPress={() => navigation.navigate('SignUp')} style={styles.login}>
        {'Signup'}
      </Text>
    </View>
  );
};

export default Login;

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
