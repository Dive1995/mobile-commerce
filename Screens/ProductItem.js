import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText'
import BackButton from '../Components/BackButton';
import CartButton from '../Components/CartButton';
import Screen from '../Components/Screen'
import colors from '../config/colors';

function ProductItem({route}) {
   const item = route.params;
   const [showMore, setShowMore] = useState(false)


   useEffect(() => {
      item.description.length > 130 ? setShowMore(true) : setShowMore(false);
   }, [item])

   const readMore = () => {
      setShowMore(!showMore)
      console.log("show more");
   }

    return (
       <Screen style={styles.container}>
         <BackButton/>
         <CartButton/>
         <ScrollView>
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={{uri: item?.image}}/>
            </View>
            <View style={styles.card}>
               <AppText style={styles.title}>{item?.title}</AppText>
               <AppText style={styles.price}>$ {item?.price}</AppText>
               <AppText style={[styles.description, showMore ? {height: 40, lineHeight:20} : {marginBottom: 50}]}>{item?.description}</AppText>
               {showMore && <Pressable onPress={readMore}><AppText style={styles.showMore}>{showMore ? "Show More" : "Show Less"}</AppText></Pressable>}
            </View>
         </ScrollView>
         <View style={styles.buttonContainer}>
            <AppButton title="Add to Cart" onPress={() => console.log("add item to cart")}/>
         </View>
       </Screen>
    )
}

const styles = StyleSheet.create({
   buttonContainer:{
      position: "absolute",
      bottom: 10,
      left:20,
      right:20
   },
   container:{
      // backgroundColor:"red"
      paddingHorizontal:20
   },
   card:{
      marginTop: 10,
   },
   image:{
      width:"100%",
      height:"100%",
      resizeMode: "contain",
   },
   imageContainer:{
      paddingTop:60,
      // backgroundColor:"red",
      height:450,
      width:"100%",
   },
   title:{
      fontSize:20,
      fontWeight:"bold",
      marginTop:20,
      
   },
   description:{
      marginTop:15,
      textAlign:'justify',
      // backgroundColor:"black"
      color:colors.dark

      
   },
   price:{
      color: colors.primary,
      fontWeight:"bold"
   },
   showMore:{
      color: colors.gray,
      fontWeight:"bold",
      fontSize: 15
   }
})

export default ProductItem