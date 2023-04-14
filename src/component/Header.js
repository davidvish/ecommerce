import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { responsiveHeight as hp, responsiveWidth as wp, responsiveFontSize as rfs } from 'react-native-responsive-dimensions';


const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.bnt} onPress={()=> onClickLeftIcon()}>
        <Image source={leftIcon}  style={styles.icon}/>
      </TouchableOpacity>
      <Text  style={styles.titleTxt}>{title}</Text>
      <TouchableOpacity style={styles.bnt}>
        <Image source={rightIcon}  style={styles.icon}/>
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
    alignItems:'center',
    paddingHorizontal:wp(2)
  },
  btn: {
    height: hp(8),
    width: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    height:hp(4),
    width:hp(4),
    tintColor:'#fff'
  },
  titleTxt:{
    color:'#fff',
    fontSize:rfs(2.5)
  }
});
