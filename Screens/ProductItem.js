import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'
import AppText from '../Components/AppText'
import BackButton from '../Components/BackButton';
import Screen from '../Components/Screen'
import colors from '../config/colors';

function ProductItem({route}) {
   const item = route.params;
   const [showMore, setShowMore] = useState(false)

   console.log({showMore});

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
         <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item?.image}}/>
         </View>
         <AppText style={styles.title}>{item?.title}</AppText>
         <AppText style={styles.price}>$ {item?.price}</AppText>
         <AppText style={[styles.description, showMore && {height: 40, lineHeight:20}]}>{item?.description}</AppText>
         {showMore && <Pressable onPress={readMore}><AppText style={styles.showMore}>{showMore ? "Show More" : "Show Less"}</AppText></Pressable>}
       </Screen>
    )
}

const styles = StyleSheet.create({
   container:{
      paddingTop:40,
      paddingHorizontal: 20
   },
   image:{
      width:"100%",
      height:"100%",
      resizeMode: "contain",
   },
   imageContainer:{
      // backgroundColor:"red",
      height:400,
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
      
   },
   price:{
      color: colors.primary,
      fontWeight:"bold"
   },
   showMore:{
      color: colors.gray
   }
})

export default ProductItem