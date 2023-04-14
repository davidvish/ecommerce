import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../component/Header';
import {globalImagePath} from '../../assets/image/globalImagePath';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import AnimatedLoader from 'react-native-animated-loader';
import LoaderAnimation from '../../component/Loader';

const Home = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [productsData, setProductsData] = useState([]);
  console.log(productsData);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      getProducts();
    }, 2000);
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductsData(json));
  };
  return (
    <View style={styles.container}>
      <Header
        title={'Home'}
        leftIcon={globalImagePath.menu}
        rightIcon={globalImagePath.shopping_bag}
        onClickLeftIcon={() => navigation.openDrawer()}
      />

      {loader ? (
        <LoaderAnimation />
      ) : (
        <FlatList
          data={productsData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetails',{data :item})}
                activeOpacity={0.9}
                style={[styles.card, styles.flex]}>
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
                  <Text style={styles.prodPrice}>{`₹ ${item.price}`}</Text>
                  <Text style={styles.prodDesc}>
                    {`Rate ${item.rating['rate']}`}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
