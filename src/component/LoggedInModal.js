import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight as hp,
  responsiveFontSize as rfs,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';
import CustomButton from './CustomButton';
import {globalImagePath} from '../assets/image/globalImagePath';

const LoggedInModal = ({
  modalVisible,
  onClickLogin,
  onClickSignup,
  onClose,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.parentView}>
        {/* <Pressable style={styles.closeModal} onPress={()=> modalVisible(false)}></Pressable> */}
        <View style={styles.box}>
          <TouchableOpacity onPress={() => onClose()}>
            <Image style={styles.closeModal} source={globalImagePath.left} />
          </TouchableOpacity>
          <CustomButton
            onPress={() => onClickLogin()}
            buttonText={'Login'}
            bg={'#ff9a0c'}
          />
          <Text style={styles.orTxt}>OR</Text>
          <CustomButton
            onPress={() => onClickSignup()}
            buttonText={'Sign up'}
            bg={'#ff9a0c'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LoggedInModal;

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    width: wp(90),
    alignSelf: 'center',
    borderRadius: wp(4),
    paddingHorizontal: wp(8),
  },
  orTxt: {
    fontSize: rfs(2.5),
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
  closeModal: {
    height: hp(4),
    width: hp(4),
    top: hp(1),
  },
});
