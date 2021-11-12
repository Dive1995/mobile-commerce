import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '../config/colors'
import AppText from './AppText'

function AppButton({onPress, title, backgroundColor = colors.primary, color= colors.white}) {
    return (
       <Pressable onPress={onPress} style={[styles.container, {backgroundColor}]}>
        <AppText style={[styles.text, {color}]}>{title}</AppText>
        <MaterialCommunityIcons name="cart" size={20} color={color}/>
       </Pressable>
    )
}

const styles = StyleSheet.create({
   container:{
       borderRadius: 20,
       paddingHorizontal: 20,
       paddingVertical:10,
       marginVertical:15,
       flexDirection: "row",
       alignItems:"center",
       justifyContent:"center",
   },
   text:{
    fontWeight:"bold",
    color:"white",
    marginHorizontal:15,
    letterSpacing: 1.3
   }
})

export default AppButton