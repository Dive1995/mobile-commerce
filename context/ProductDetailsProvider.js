import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';


export const ProductContext = createContext()

function ProductDetailsProvider({children}) {
  const [products, setProducts] = useState([]);
  // console.log({productsState :products});

    useEffect(() => {
        fetchProducts()
    },[])

    async function fetchProducts(){
      const result = await getAllProducts()
      setProducts(result.data)
    }

    return (
      <ProductContext.Provider value={{products, fetchProducts}}>
        {children}
      </ProductContext.Provider>
    )
}

const styles = StyleSheet.create({
   container:{}
})

export default ProductDetailsProvider