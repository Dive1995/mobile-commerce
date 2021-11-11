import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../Components/AppText'
import Screen from '../Components/Screen'

function CartScreen() {
    return (
       <Screen style={styles.container}>
          <AppText>Cart</AppText>
       </Screen>
    )
}

const styles = StyleSheet.create({
   container:{}
})

export default CartScreen