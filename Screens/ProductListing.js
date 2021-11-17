import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, RefreshControl, StyleSheet, View } from 'react-native'
import AppText from '../Components/AppText'
import ProductCard from '../Components/ProductCard'
import Screen from '../Components/Screen'
import colors from '../config/colors'
import { ProductContext } from '../context/ProductDetailsProvider'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppActivityIndicator from '../Components/AppActivityIndicator'
import CartButton from '../Components/CartButton'


function ProductListing({ navigation }) {
   // all products
   const {categories, products, fetchProducts} = useContext(ProductContext)
    
   //  currently selected category to filter products
    const [selectedCategory, setSelectedCategory] = useState('all')

   //  filtered products
    const [filteredProducts, setFilteredProducts] = useState([])

   //  set filtered product
    useEffect(() => {
      setFilteredProducts(products?.filter(item => item.category == selectedCategory))
    }, [selectedCategory])


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      fetchProducts()
      // console.log("refreshed");
    }, []);
  

    return (
       <Screen style={styles.container}>
         {/* <AppText>Hello Dive, have a nice day :</AppText> */}
         <View style={styles.topsection}>
            <Pressable onPress={() => console.log("drawer")}>
               <MaterialCommunityIcons name="menu" size={30} color={colors.gray}/>
            </Pressable>
            {/* <Pressable onPress={() => navigation.navigate("Cart")}>
               <MaterialCommunityIcons name="cart" size={25} color={colors.gray}/>
            </Pressable> */}
            <CartButton style={{top: 10, right: 15}}/>
         </View>
         { products?.length > 0 ? <View>
            <FlatList
               contentContainerStyle={styles.categoryContainer}
               showsHorizontalScrollIndicator={false}
               horizontal
               data={categories}
               keyExtractor={(item) => item}
               renderItem={({item}) => (
                  <Pressable onPress={() => setSelectedCategory(item)} style={[styles.category, selectedCategory == item ? {backgroundColor:colors.primary} : null]}>
                     <AppText style={[{fontSize:12, textTransform:"capitalize", color: colors.black}, selectedCategory == item ? {fontWeight:"bold"} : null]}>{item}</AppText>
                  </Pressable>
               )}
            />
            <FlatList
               refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
               contentContainerStyle={styles.productlist}
               showsVerticalScrollIndicator={false}
               data={selectedCategory === "all" ? products : filteredProducts}
               numColumns={2}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => <ProductCard item={item}/>}
            />
         </View> 
            : 
            <AppActivityIndicator visible={true}/>
         }
       </Screen>
    )
}

const styles = StyleSheet.create({
   container:{
      //  padding: 10,
      // backgroundColor: colors.light
   },
   category:{
      backgroundColor: colors.secondary,
      // borderColor: colors.secondary,
      // borderWidth:1,
      borderRadius:20,
      margin:5,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      paddingHorizontal:15,
      paddingVertical:10,
   },
   categoryContainer:{
      // backgroundColor:"gold",
      paddingVertical:10,
      paddingHorizontal:10,
      // marginVertical:10,
   },
   productlist:{
      // padding: 10,
      justifyContent:"center",
      alignItems:"center",
      marginBottom:90
   },
   topsection:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:15,
      paddingTop:10
   }
})

export default ProductListing