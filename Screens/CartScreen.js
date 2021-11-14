import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AppButton from '../Components/AppButton'
import AppText from '../Components/AppText'
import BackButton from '../Components/BackButton'
import CartItem from '../Components/CartItem'
import ProductCard from '../Components/ProductCard'
import Screen from '../Components/Screen'
import colors from '../config/colors'
import { ProductContext } from '../context/ProductDetailsProvider'



function CartScreen() {
   const {cart} = useContext(ProductContext);
   const [total,setTotal] = useState({count: 0, amount: 0})

   useEffect(() => {
      setTotal(cart.reduce((total, item) => {
         console.log({total});
         total.count = total.count + item.count;
         total.amount = total.amount + item.count * item.price;
         total.amount = Math.round((total.amount + Number.EPSILON) * 100) / 100
         
         return total
      },{count:0, amount: 0}))
   },[cart])

    return (
       <Screen style={styles.container}>
         <BackButton/>
         <View style={styles.headerContainer}>
            <AppText style={styles.mainTitle}>My Bag</AppText>
            <AppText style={{color: colors.gray}}>{total?.count} items</AppText>
            
         </View>
         {total.count ? <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CartItem item={item}/>}
            // renderItem={({item}) => (<ProductCard item={item}/>)}
         /> : <AppText style={{textAlign:"center", color:colors.gray, fontSize:20, marginTop:30}}>Add some items.</AppText>}
         <View style={styles.buttonContainer}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
               <AppText style={{fontWeight:"bold", color: colors.dark}}>Total amount</AppText>
               <AppText style={{color: colors.gray, fontWeight:"bold"}}>${total?.amount}</AppText>
            </View>
            <AppButton title="Checkout" icon="payment" backgroundColor={colors.black}/>
         </View>
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
   },
   buttonContainer:{
      position: "absolute",
      bottom: 10,
      left:20,
      right:20
   },
})

export default CartScreen