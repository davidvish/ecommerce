import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../component/Header';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlices';
import {globalImagePath} from '../assets/image/globalImagePath';

const Cart = () => {
  const items = useSelector(state => state.cart);
  // console.log(JSON.stringify(items)+ "" + items.data.length)
  const navigation = useNavigation();

  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItem(items.data);
  }, [items]);

  return (
    <View style={styles.container}>
      <Header
        title={'Cart'}
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <View>
        <FlatList
          data={cartItem}
          renderItem={({item, index}) => {
            return (
              <View activeOpacity={0.9} style={[styles.card, styles.flex]}>
                <View style={styles.img}>
                  <Image style={styles.prodImg} source={{uri: item.image}} />
                </View>
                <View>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.prodName}>
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + '...'
                      : item.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.prodDesc}>
                    {item.description.length > 25
                      ? item.description.substring(0, 25) + '...'
                      : item.title}
                  </Text>
                  <View style={[styles.flex, {marginTop: hp(1)}]}>
                    <Text style={styles.prodPrice}>{`₹ ${item.price}`}</Text>
                    <View style={[styles.flexRow, {marginLeft: wp(5)}]}>
                      <TouchableOpacity
                        style={styles.qty}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(reduceItemFromCart(item));
                          } else {
                            dispatch(removeItemFromCart(index));
                          }
                        }}>
                        <Text>{' - '}</Text>
                      </TouchableOpacity>
                      <Text style={styles.qtyTxt}>{item.qty}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(addItemToCart(item));
                        }}
                        style={[styles.qty, {marginLeft: wp(5)}]}>
                        <Text>{' + '}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prodImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  img: {
    height: hp(18),
    width: wp(30),
    padding: hp(1),
    elevation: 1,
  },
  card: {
    width: '90%',
    height: hp(18),
    backgroundColor: '#fff',
    margin: hp(2),
    alignSelf: 'center',
    elevation: 5,
  },
  prodName: {
    color: '#000',
    fontSize: rfs(2.2),
    fontWeight: '500',
  },
  prodDesc: {
    color: '#000',
    fontSize: rfs(2),
    fontWeight: '400',
  },
  prodPrice: {
    color: '#000',
    fontSize: rfs(2),
    fontWeight: '700',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  qty: {
    height: hp(4),
    width: hp(4),
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: rfs(2),
    borderRadius: 2,
  },
  qtyTxt: {
    fontSize: rfs(2),
    textAlign: 'center',
    alignSelf: 'center',
    left: wp(3),
  },
});
