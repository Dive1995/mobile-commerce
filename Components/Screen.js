import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants';

function Screen({children, style}) {
   return (
       <SafeAreaView style={[styles.container, style]}>
          {children}
       </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1,
        paddingTop: Constants.statusBarHeight,
    }
})

export default Screen