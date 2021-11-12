import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';


export const ProductContext = createContext()

function reducer(state, action){
  if(action.type === "AddToCart"){
    return {...state, products: action.payload}
  }

  return state;
}

const initialState = {
  products: []
}

function ProductDetailsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        fetchProducts()
    },[])

    async function fetchProducts(){
      const result = await getAllProducts()
      // setProducts(result.data)
      console.log("Fetching data");
      dispatch({type:'AddToCart', payload: result.data})
    }

    return (
      <ProductContext.Provider value={{ products: state.products, fetchProducts }}>
        {children}
      </ProductContext.Provider>
    )
}

const styles = StyleSheet.create({
   container:{}
})

export default ProductDetailsProvider