import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import {globalImagePath} from '../image/globalImagePath';
import {responsiveHeight as hp} from 'react-native-responsive-dimensions';
import Search from './Tabs/Search';
import Home from './Tabs/Home';
import Wishlist from './Tabs/Wishlist';
import Notification from './Tabs/Notification';
import User from './Tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
 
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
    </View>
  );
};

export default HomeScreen;

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
    tintColor: 'red',
  },
});
