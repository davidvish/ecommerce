import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  const cartItem = useSelector(state => state.cart);
  console.log(cartItem.data.length);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.bnt} onPress={() => onClickLeftIcon()}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.titleTxt}>{title}</Text>
      <TouchableOpacity style={styles.bnt}>
        <Image source={rightIcon} style={styles.icon} />
        <View style={styles.addCart}>
          <Text style={styles.cartTxt}>{cartItem.data.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: hp(8),
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  btn: {
    height: hp(8),
    width: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: hp(4),
    width: hp(4),
    tintColor: '#fff',
  },
  titleTxt: {
    color: '#fff',
    fontSize: rfs(2.5),
  },
  addCart: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    height:hp(2.5),
    width:hp(2.5),
    justifyContent:'center',
    alignItems:'center',
    right:-wp(1),
    top:hp(0)
  },
  cartTxt: {
    color: '#000',
    fontSize:rfs(1.2)
  },
});
