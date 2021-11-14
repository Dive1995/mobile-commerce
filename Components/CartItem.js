import React, { useContext } from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors'
import AppText from './AppText'
import { ProductContext } from '../context/ProductDetailsProvider'
import CartDeleteButton from './CartDeleteButton';

function CartItem({item}) {
    const navigation = useNavigation();
    const {increaseCount, decreaseCount, deleteItem} = useContext(ProductContext);

    return (
        <Swipeable onPress={() => navigation.navigate("Product", item)} renderRightActions={() => <CartDeleteButton id={item.id}/>}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                </View>
                <View style={styles.content}>
                    <AppText style={styles.title}>{item.title}</AppText>
                    <AppText style={styles.price}>$ {item.price}</AppText>
                </View>
                <View style={styles.countContainer}>
                    <Pressable onPress={() => increaseCount(item.id)} style={styles.increaseButton}><MaterialIcons name="keyboard-arrow-up" size={30} color={colors.dark}/></Pressable>
                    <AppText>{item.count}</AppText>
                    <Pressable onPress={() => item.count > 1 ? decreaseCount(item.id) : deleteItem(item.id)} style={styles.decreaseButton}><MaterialIcons name="keyboard-arrow-down" size={30} color={colors.gray}/></Pressable>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
   container:{
        height:100,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:colors.white,
        marginVertical:5,
        padding:10,
        borderRadius:15,
        overflow:"hidden"
   },
   image:{
       width: "100%",
       height: "100%",
       resizeMode:"contain"
   },imageContainer:{
       width: 80
   },
   content:{
       width: 220,
       justifyContent:"center",
   },
   countContainer:{
    width: 40,
    // backgroundColor:"gold",
    alignItems:"center",
    justifyContent:"center" 
   },
   title:{
       overflow:"hidden",
    //    width: 200,
       height: 40,
       fontSize: 16
    //    backgroundColor:"red"
   },
   price:{
       color: colors.secondary,
       fontSize:16
   },
   increaseButton:{
    //    backgroundColor:"red"
   },
 
})

export default CartItem