import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../component/Header';
import {globalImagePath} from '../assets/image/globalImagePath';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlices';
import CustomButton from '../component/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';


const Checkout = () => {
  const items = useSelector(state => state.cart);
  // console.log(JSON.stringify(items)+ "" + items.data.length)
  const navigation = useNavigation();

  const [cartItem, setCartItem] = useState([]);
  const [payMethodSelected, setPayMethodSelected] = useState(0);
  const [selectAddress, setSelectAddress] = useState('Please Select Address');
  const dispatch = useDispatch();

  const isFocused = useIsFocused()

  useEffect(() => {
    setCartItem(items.data);
  }, [items]);

  useEffect(() => {
    getSelectedAddress()
  }, [isFocused]);
  const getSelectedAddress = async () => {
    setSelectAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  };
  const getTotalAmount = () => {
    let total = 0;
    cartItem.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={globalImagePath.left}
        onClickLeftIcon={() => navigation.goBack()}
        title={'Checkout'}
      />
      <ScrollView
        style={{paddingHorizontal: wp(5)}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headTitle}>Added Item</Text>
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
        <View style={[styles.flexRow]}>
          <Text style={styles.prodName}>Total</Text>
          <Text style={styles.prodName}>{`₹ ${getTotalAmount()}`}</Text>
        </View>
        <View style={styles.divider} />
        <View style={[styles.flex, {paddingVertical: hp(2.5)}]}>
          <TouchableOpacity onPress={() => setPayMethodSelected(0)}>
            <Image
              style={[
                styles.radioButton,
                {tintColor: payMethodSelected == 0 ? 'green' : 'black'},
              ]}
              source={
                payMethodSelected == 0
                  ? globalImagePath.radioButtonOn
                  : globalImagePath.radioButton
              }
            />
          </TouchableOpacity>
          <Text style={styles.payMethodTxt}>Credit Cart</Text>
        </View>
        <View style={[styles.flex, {paddingVertical: hp(2.5)}]}>
          <TouchableOpacity onPress={() => setPayMethodSelected(1)}>
            <Image
              style={[
                styles.radioButton,
                {tintColor: payMethodSelected == 1 ? 'green' : 'black'},
              ]}
              source={
                payMethodSelected == 1
                  ? globalImagePath.radioButtonOn
                  : globalImagePath.radioButton
              }
            />
          </TouchableOpacity>
          <Text style={styles.payMethodTxt}>Debit Cart</Text>
        </View>
        <View style={[styles.flex, {paddingVertical: hp(2.5)}]}>
          <TouchableOpacity onPress={() => setPayMethodSelected(2)}>
            <Image
              style={[
                styles.radioButton,
                {tintColor: payMethodSelected == 2 ? 'green' : 'black'},
              ]}
              source={
                payMethodSelected == 2
                  ? globalImagePath.radioButtonOn
                  : globalImagePath.radioButton
              }
            />
          </TouchableOpacity>
          <Text style={styles.payMethodTxt}>UPI</Text>
        </View>
        <View style={[styles.flex, {paddingVertical: hp(2.5)}]}>
          <TouchableOpacity onPress={() => setPayMethodSelected(3)}>
            <Image
              style={[
                styles.radioButton,
                {tintColor: payMethodSelected ? 'green' : 'black'},
              ]}
              source={
                payMethodSelected == 3
                  ? globalImagePath.radioButtonOn
                  : globalImagePath.radioButton
              }
            />
          </TouchableOpacity>
          <Text style={styles.payMethodTxt}>Cash on Delivery</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
          <Text style={styles.headTitle}>Address</Text>
          <Text
            onPress={() => navigation.navigate('Address')}
            style={styles.editAddress}>
            Edit Address
          </Text>
        </View>

        <Text style={[styles.payMethodTxt, {marginLeft: 0}]}>
          {selectAddress}
        </Text>

        <CustomButton buttonText={'Pay or Order'} bg={'green'}  onPress={()=>{
           var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_6xSvy1s9GVRSs3', // Your api key
            amount: '5000',
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
        }}/>
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headTitle: {
    fontSize: rfs(2.5),
    color: '#000',
    fontWeight: '600',
    marginVertical: hp(2),
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
    width: '99%',
    height: hp(18),
    backgroundColor: '#fff',
    marginVertical: hp(2),
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
  tabCart: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: hp(1),
  },
  radioButton: {
    height: hp(3),
    width: hp(3),
  },
  payMethodTxt: {
    color: '#000',
    fontSize: rfs(2.2),
    fontWeight: '400',
    marginLeft: wp(5),
  },
  editAddress: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: rfs(2),
  },
});
