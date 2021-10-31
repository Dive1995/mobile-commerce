import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import AppText from '../Components/AppText'
import Screen from '../Components/Screen'
import { ProductContext } from '../context/ProductDetailsProvider'

function ProductListing() {
    const response = useContext(ProductContext)
    console.log({response});

    return (
       <Screen style={styles.container}>
          <AppText>Hello Dive, have a nice day :</AppText>
       </Screen>
    )
}

const styles = StyleSheet.create({
   container:{
       padding: 10,
   }
})

export default ProductListing