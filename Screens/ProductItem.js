import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import AppButton from '../Components/AppButton';
import AppText from '../Components/AppText'
import BackButton from '../Components/BackButton';
import CartButton from '../Components/CartButton';
import Screen from '../Components/Screen'
import colors from '../config/colors';
import { ProductContext } from '../context/ProductDetailsProvider';
import { Rating, AirbnbRating } from 'react-native-ratings';

function ProductItem({route}) {
   const item = route.params;
   const [showMore, setShowMore] = useState(false)
   const {addToCart} = useContext(ProductContext)


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
         <ScrollView contentContainerStyle={{flex:1}}>
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={{uri: item?.image}}/>
            </View>
            <View style={styles.card}>
               <AppText style={styles.title}>{item?.title}</AppText>
               <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Rating
                     readonly={true}
                     type='custom'
                     ratingBackgroundColor='#c8c7c8'
                     ratingCount={5}
                     startingValue={item.rating.rate}
                     tintColor={colors.light}
                     size={10}
                     style={{ width:160, paddingLeft:30  }}
                  />
                  <AppText style={{marginVertical:10, fontSize:14}}>Out of {item?.rating.count} reviews</AppText>
               </View>
               <AppText style={styles.price}>$ {item?.price}</AppText>
               <AppText style={[styles.description, showMore ? {height: 40, lineHeight:20} : {marginBottom: 50}]}>{item?.description}</AppText>
               {showMore && <Pressable onPress={readMore}><AppText style={styles.showMore}>{showMore ? "Show More" : "Show Less"}</AppText></Pressable>}
            </View>
         </ScrollView>
         <View style={styles.buttonContainer}>
            <AppButton title="Add to Cart" onPress={() => addToCart(item?.id)}/>
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
      // backgroundColor:colors.light,
      // paddingHorizontal:20
   },
   card:{
      marginTop: 10,
      backgroundColor:colors.light,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingHorizontal:20,
      flex:1
   },
   image:{
      width:"100%",
      height:"100%",
      resizeMode: "contain",
   },
   imageContainer:{
      paddingTop:60,
      paddingBottom:10,
      backgroundColor: colors.white,
      height:450,
      width:"100%",
   },
   title:{
      fontSize:20,
      fontWeight:"bold",
      marginTop:25,
      
   },
   description:{
      marginTop:15,
      textAlign:'justify',
      // backgroundColor:"black"
      color:colors.dark

      
   },
   price:{
      color: colors.primary,
      fontWeight:"bold",
      fontSize:20
   },
   showMore:{
      color: colors.gray,
      fontWeight:"bold",
      fontSize: 15
   }
})

export default ProductItem