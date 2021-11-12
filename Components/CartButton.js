import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

function CartButton() {
    return (
       <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Cart")}>
            <MaterialCommunityIcons name="cart" size={30} color={colors.gray}/>
        </Pressable>
       </View>
    )
}

const styles = StyleSheet.create({
   container:{
       position:"absolute",
       top:35, //if padding given change it to 30
       right:15,
       zIndex: 2,
    //    backgroundColor: colors.light,
    //    borderRadius:30,
    //    padding:7,
   }
})

export default CartButton