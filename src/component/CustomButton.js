import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize  as rfs, responsiveHeight as hp} from 'react-native-responsive-dimensions'

const CustomButton = ({onPress,buttonText, bg}) => {
  return (
   <TouchableOpacity style={[styles.btn,{backgroundColor: bg}]}
    onPress={()=> onPress()}>
    <Text style={[styles.btnTxt]}>{buttonText}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#0786DAFD',
        borderRadius:hp(1.2),
        width:'100%',
        height:hp(7.5),
        alignSelf:'center',
        justifyContent:'center',
        marginVertical:hp(4)
    },
    btnTxt:{
        fontSize:rfs(2.2),
        fontWeight:'700',
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    }
})