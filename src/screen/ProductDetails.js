import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../component/Header';
import {globalImagePath} from '../assets/image/globalImagePath';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  responsiveHeight as hp,
  responsiveFontSize as rfs,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';
import CustomButton from '../component/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../redux/slices/WishListSlices';
import {addItemToCart} from '../redux/slices/CartSlices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoggedInModal from '../component/LoggedInModal';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const checkUserStatus = async () => {
    let IsUserLoggedIn = false;
    let status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');

    if (status == null) {
      IsUserLoggedIn = false;
    } else {
      IsUserLoggedIn = true;
    }
    return IsUserLoggedIn;

    // if(status === null){
    //   <LoggedInModal />
    // }else{
    //   dispatch(
    //     addItemToCart({
    //       category: route.params.data.category,
    //       description: route.params.data.description,
    //       id: route.params.data.id,
    //       image: route.params.data.image,
    //       price: route.params.data.price,
    //       qty: qty,
    //       rating: route.params.data.rating,
    //       title: route.params.data.title,
    //     }),
    //   );
    // }
  };

  const checkUserStatusWishList = async () => {
    let status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
    if (status === null) {
      <LoggedInModal modalVisible={modalVisible} />;
    } else {
      dispatch(addItemToWishList(route.params.data));
    }
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
        rightIcon={globalImagePath.shopping_bag}
        title={'Product Details'}
        isCart={true}
      />
      <Image style={styles.prodImg} source={{uri: route.params.data.image}} />
      <TouchableOpacity
        onPress={() => {
          if (checkUserStatus() === true) {
            dispatch(addItemToWishList(route.params.data));
          } else {
            setModalVisible(true);
          }
        }}
        activeOpacity={0.5}
        style={styles.wishlist}>
        <Image style={styles.heart} source={globalImagePath.heart} />
      </TouchableOpacity>
      <ScrollView style={{paddingHorizontal: wp(5)}}>
        <Text style={styles.prodTitle}>{route.params.data.title}</Text>
        <Text style={styles.prodDes}>{route.params.data.description}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.prodPrice,
              {color: '#000', marginRight: wp(4)},
            ]}>{`Price`}</Text>
          <View style={styles.flexRow}>
            <Text
              style={styles.prodPrice}>{`₹ ${route.params.data.price}`}</Text>
            {/* <View style={{flexDirection: 'row'}}>
              <Text
                style={
                  styles.prodPrice
                }>{` ${route.params.data.rating['rate']}`}</Text>
              <Text
                style={
                  styles.prodPrice
                }>{` ${route.params.data.rating['count']}`}</Text>
            </View> */}
          </View>
          <View style={[styles.flexRow, {marginLeft: wp(5)}]}>
            <TouchableOpacity
              style={styles.qty}
              onPress={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}>
              <Text>{' - '}</Text>
            </TouchableOpacity>
            <Text style={styles.qtyTxt}>{qty}</Text>
            <TouchableOpacity
              onPress={() => {
                setQty(qty + 1);
              }}
              style={[styles.qty, {marginLeft: wp(5)}]}>
              <Text>{' + '}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton
          bg={'#ff9a0c'}
          buttonText={'Add To Cart'}
          onPress={() => {
            if (checkUserStatus() === true) {
              dispatch(
                addItemToCart({
                  category: route.params.data.category,
                  description: route.params.data.description,
                  id: route.params.data.id,
                  image: route.params.data.image,
                  price: route.params.data.price,
                  qty: qty,
                  rating: route.params.data.rating,
                  title: route.params.data.title,
                }),
              );
            } else {
              setModalVisible(true);
            }
          }}
        />
      </ScrollView>
      <LoggedInModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onClickLogin={() => {
          setModalVisible(false);
          navigation.navigate('Login');
        }}
        onClickSignup={() => {
          setModalVisible(false);
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  prodImg: {
    height: hp(40),
    width: '100%',
    resizeMode: 'center',
  },
  prodTitle: {
    fontSize: rfs(2.8),
    textAlign: 'left',
    fontWeight: '600',
    color: '#000',
    paddingVertical: hp(2),
    lineHeight: hp(4),
  },
  prodDes: {
    fontSize: rfs(2),
    textAlign: 'justify',
    color: 'grey',
    fontWeight: '400',
    lineHeight: hp(3.5),
  },
  prodPrice: {
    fontSize: rfs(3),
    color: 'green',
    fontWeight: '700',
    paddingVertical: hp(1),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wishlist: {
    position: 'absolute',
    height: hp(8),
    width: hp(8),
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    top: hp(12),
    right: wp(5),
    bottom: 0,
    borderRadius: hp(50),
  },
  heart: {
    height: hp(4),
    width: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
