import {StyleSheet, Text, View, ActivityIndicator,Image} from 'react-native';
import React, {useEffect,useState} from 'react';
import { responsiveHeight  as hp} from 'react-native-responsive-dimensions';
import { globalImagePath } from '../assets/image/globalImagePath';


const LoaderAnimation = () => {
  const [color, setColor] = useState('tael');
  useEffect(() => {
    let id = setInterval(() => {
      setColor(color => (color == 'teal' ? 'royalblue' : 'teal'));
    }, 700);
    return () => clearInterval(id);
  }, []);
  return (
    <View style={styles.indicatorWrapper}>
      {/* <ActivityIndicator style={{top: hp(1)}} color={color} size={30} /> */}
      {/* <Text>Loader</Text> */}
      <Image source={globalImagePath.loader} style={styles.loader}/>
    </View>
  );
};

export default LoaderAnimation;

const styles = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      loader:{
        height:hp(20),
        width:hp(20),
        resizeMode:'contain'
      }
    
});
