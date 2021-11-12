import React from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors'
import AppText from './AppText'


function ProductCard({item}) {
    const navigation = useNavigation()
    return (
       <Pressable onPress={() => navigation.navigate("Product", item)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <AppText style={styles.title}>{item.title}</AppText>
                <AppText style={styles.price}>${item.price}</AppText>
            </View>
       </Pressable>
    )
}

const styles = StyleSheet.create({
   container:{
    backgroundColor:colors.white,
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