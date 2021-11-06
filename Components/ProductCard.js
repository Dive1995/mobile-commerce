import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

function ProductCard({item}) {
    return (
       <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={styles.price}>${item.price}</AppText>
       </View>
    )
}

const styles = StyleSheet.create({
   container:{
    // backgroundColor:"red",
    borderRadius:15,
    borderColor: colors.gray,
    borderWidth:1,
    width:170,
    minHeight:250,
    overflow:'hidden',
    margin:8,
    padding: 10,
   },
   image:{
       width:"100%",
       height:160,
       resizeMode: "contain",
   },
   title:{
       fontSize:14, 
       textAlign:"center",
       marginTop:10
   },
   price:{
       fontSize:14, 
       textAlign:"center",
       marginTop:10,
       color: colors.primary
   },
})

export default ProductCard