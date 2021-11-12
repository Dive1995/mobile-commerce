import React, { useContext } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import AppText from './AppText'
import { ProductContext } from '../context/ProductDetailsProvider'
import {useNavigation} from "@react-navigation/native"


function CartButton({style}) {
    const { cart } = useContext(ProductContext)
    const navigation = useNavigation()

    return (
        <Pressable style={[styles.container, style]} onPress={() => navigation.navigate("Cart")}>
            <MaterialCommunityIcons name="cart" size={30} color={colors.gray}/>
            {cart?.length > 0 && <AppText style={styles.text}>{cart.length}</AppText>}
        </Pressable>
    )
}

const styles = StyleSheet.create({
   container:{
       position:"absolute",
       top:35, //if padding given change it to 30
       right:15,
       zIndex: 2,
       flexDirection:"row",
       alignItems:"center",
    //    backgroundColor: "red",
    //    borderRadius:30,
    //    padding:7,
   },
   text:{
       position:'absolute',
       fontSize: 13,
       backgroundColor: colors.secondary,
       borderRadius:15,
       color:colors.white,
       width: 20,
       height: 20,
       textAlign:"center",
       top: -5,
       right:-5,
   }
})

export default CartButton