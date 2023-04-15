import {Image, StyleSheet, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../component/Header';
import {globalImagePath} from '../../assets/image/globalImagePath';
import {responsiveHeight as hp} from 'react-native-responsive-dimensions';
import Search from '../../screen/Search';
import Home from '../../screen/Home';
import Wishlist from '../../screen/Wishlist';
import Notification from './Notification';
import User from './User';

const HomeTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      {/* <Header
        title={'Home'}
        leftIcon={globalImagePath.menu}
        rightIcon={globalImagePath.shopping_bag}
      /> */}
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Wishlist />
      ) : selectedTab === 3 ? (
        <Notification />
      ) : (
        <User />
      )}
     {!isKeyboardVisible  && (
       <View style={styles.bottomView}>
       <TouchableOpacity
         style={styles.bottomTabs}
         onPress={() => setSelectedTab(0)}>
         <Image
           source={
             selectedTab === 0
               ? globalImagePath.home_fill
               : globalImagePath.home
           }
           style={styles.bottomImg}
         />
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.bottomTabs}
         onPress={() => setSelectedTab(1)}>
         <Image
           source={
             selectedTab === 1
               ? globalImagePath.search_fill
               : globalImagePath.search
           }
           style={styles.bottomImg}
         />
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.bottomTabs}
         onPress={() => setSelectedTab(2)}>
         <Image
           source={
             selectedTab === 2
               ? globalImagePath.heart_fill
               : globalImagePath.heart
           }
           style={styles.bottomImg}
         />
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.bottomTabs}
         onPress={() => setSelectedTab(3)}>
         <Image
           source={
             selectedTab === 3
               ? globalImagePath.notification_fill
               : globalImagePath.notification
           }
           style={styles.bottomImg}
         />
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.bottomTabs}
         onPress={() => setSelectedTab(4)}>
         <Image
           source={
             selectedTab === 4
               ? globalImagePath.user_fill
               : globalImagePath.user
           }
           style={styles.bottomImg}
         />
       </TouchableOpacity>
     </View>
     )}
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp(8),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation:10
  },
  bottomTabs: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImg: {
    height: hp(4),
    width: hp(4),
    tintColor: '#0786DAFD',
  },
});
