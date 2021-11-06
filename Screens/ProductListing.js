import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import AppText from '../Components/AppText'
import ProductCard from '../Components/ProductCard'
import Screen from '../Components/Screen'
import colors from '../config/colors'
import { ProductContext } from '../context/ProductDetailsProvider'

function ProductListing() {
    const {products} = useContext(ProductContext)
    
   useEffect(() => {
      const productcategory = products.map(item => item.category)
      setCategories([...new Set(productcategory)])
   }, [products])

   useEffect(() => {
      setSelectedCategory(categories[0])
   },[categories])

    let [categories, setCategories] = useState([])

    const [selectedCategory, setSelectedCategory] = useState('')
    console.log({selectedCategory});

    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
      setFilteredProducts(products.filter(item => item.category == selectedCategory))
    }, [selectedCategory])



    return (
       <Screen style={styles.container}>
            {/* <AppText>Hello Dive, have a nice day :</AppText> */}
         { products.length > 0 ? <View>
            <FlatList
               style={styles.categoryContainer}
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
               showsVerticalScrollIndicator={false}
               data={filteredProducts}
               numColumns={2}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => <ProductCard item={item}/>}
            />
         </View> 
            : 
         <View>
            <AppText>Loading...</AppText>
         </View>
         }
       </Screen>
    )
}

const styles = StyleSheet.create({
   container:{
       padding: 10,
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
      // marginVertical:10,
   }
})

export default ProductListing