import React from 'react'
import { View, StyleSheet, TouchableHighlight, Pressable } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors'

function BackButton() {
    const navigation = useNavigation()
    return (
       <Pressable hitSlop={10} onPress={() => navigation.goBack()} style={styles.container}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={colors.gray}/>
       </Pressable>
    )
}

const styles = StyleSheet.create({
   container:{
       position: "absolute",
       top:30,
       left:15,
    //    backgroundColor: colors.secondary,
       borderRadius:30,
       padding:3,
       zIndex: 2,
   }
})

export default BackButton