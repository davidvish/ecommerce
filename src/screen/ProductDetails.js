import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
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

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
        rightIcon={globalImagePath.shopping_bag}
        title={'Product Details'}
      />
      <Image style={styles.prodImg} source={{uri: route.params.data.image}} />
      <TouchableOpacity
        onPress={() => dispatch(addItemToWishList(route.params.data))}
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
        </View>

        <CustomButton
          bg={'#ff9a0c'}
          buttonText={'Add To Cart'}
          onPress={() => dispatch(addItemToWishList(route.params.data))}
        />
      </ScrollView>
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
});
