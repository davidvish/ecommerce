import {View, Text, StyleSheet, FlatList} from 'react-native';
import React,{useEffect, useState} from 'react';
import Header from '../Header';
import {globalImagePath} from '../../image/globalImagePath';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [productsData ,setProductsData] = useState([]);
  console.log(productsData)

  useEffect(() => {
    getProducts();
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
      <FlatList 
      data={productsData}
      renderItem={({item,index}) => {
        return(
          <Text>{''}</Text>
        )
      }}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
