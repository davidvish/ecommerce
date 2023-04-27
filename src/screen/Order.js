import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {globalImagePath} from '../assets/image/globalImagePath';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {responsiveHeight as hp, responsiveFontSize as rfs , responsiveWidth as wp} from 'react-native-responsive-dimensions';

const Order = () => {
  const navigation = useNavigation();
  const orderList = useSelector(state => state.order);
  console.log('abc', orderList.data);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        title={'Order'}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <FlatList
        data={orderList.data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.orderItemView}>
              <FlatList
                data={item.item}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.productItem}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.itemImg}
                      />
                      <View>
                        <Text style={styles.addTxt}>{item.title.length > 20 ? item.title.substring(0, 20) : item.title }</Text>
                        <Text style={styles.addTxt}>{item.description.length > 30 ? item.description.substring(0, 30) : item.description}</Text>
                        <Text style={styles.addTxt}>{'INR' + item.price}</Text>
                        <Text style={styles.addTxt}>{item.date}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderItemView: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  productItem: {
    width: '95%',
    flexDirection: 'row',
    borderRadius: 7,
    alignSelf: 'center',
    padding: hp(2),
  },
  itemImg: {
    width: hp(7),
    height: hp(7),
    marginRight:wp(2),
  },
  addTxt: {
    color: '#000',
  },
});
