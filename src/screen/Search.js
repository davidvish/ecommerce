import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {addProduct} from '../redux/slices/ProductSlices';
import {useSelector} from 'react-redux';
import Header from '../component/Header';
import {globalImagePath} from '../assets/image/globalImagePath';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rfs,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState(oldData);

  const navigation = useNavigation()

  const filterData = txt => {
    let newData = oldData.filter(e => {
      return e.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchedList(newData);
  };

  return (
    <View style={styles.container}>
      <Header title={'Search item'} />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.searchImg} source={globalImagePath.search} />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            style={styles.searchInput}
            placeholder="Search item here..."
          />
        </View>
        {search !== '' && (
          <TouchableOpacity onPress={()=> {setSearch(''); filterData('')}}>
            <Image style={styles.closeImg} source={globalImagePath.close} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList data={searchedList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', {data: item})
              }
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
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    width: '90%',
    borderRadius: wp(3),
    height: hp(6.5),
    borderWidth: 1,
    marginVertical: hp(2),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchImg: {
    height: hp(2.5),
    width: hp(2.5),
    resizeMode: 'cover',
    left: wp(2),
    marginRight: wp(3),
  },
  searchInput: {
    color: '#000',
    width: '80%',
  },
  closeImg: {
    height: hp(2.5),
    width: hp(2.5),
    resizeMode: 'cover',
    right: wp(2.5),
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
