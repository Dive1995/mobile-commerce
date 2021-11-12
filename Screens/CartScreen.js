import React, { useContext } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AppText from '../Components/AppText'
import BackButton from '../Components/BackButton'
import CartItem from '../Components/CartItem'
import ProductCard from '../Components/ProductCard'
import Screen from '../Components/Screen'
import colors from '../config/colors'
import { ProductContext } from '../context/ProductDetailsProvider'

function CartScreen() {
   const {cart} = useContext(ProductContext)
   console.log(cart);

    return (
       <Screen style={styles.container}>
         <BackButton/>
         <View style={styles.headerContainer}>
            <AppText style={styles.mainTitle}>My Bag</AppText>
            <AppText style={{color: colors.gray}}>{cart.length} items</AppText>
         </View>
         <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CartItem item={item}/>}
            // renderItem={({item}) => (<ProductCard item={item}/>)}
         />
       </Screen>
    )
}

const styles = StyleSheet.create({
   container:{
      paddingHorizontal: 10,
      backgroundColor:colors.light
   },
   mainTitle:{
      fontSize: 30,
   },
   headerContainer:{
      alignItems: 'center',
      marginTop: 10,
      marginBottom:20
   }
})

export default CartScreen