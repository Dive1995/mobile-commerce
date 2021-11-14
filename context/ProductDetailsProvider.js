import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';


export const ProductContext = createContext()

function reducer(state, action){
  // Fetch data from API
  if(action.type === "FetchData"){
    return {...state, products: action.payload}
  }
  // Set category buttons
  else if(action.type === "SET_CATEGORY"){
    return {...state, categories: [...state.categories, ...action.payload]}
  }
  // Add item to cart
  else if(action.type === "AddToCart"){
    // check if the item already is already in the cart
    const alreadyInCart = state.cart.filter((item) => item.id === action.payload);

    if(alreadyInCart?.length > 0){
      alert("Already added")
      return state;
    }
  
    // find the added item
    const newCartItem = state.products.filter((item) => item.id === action.payload)
    const updatedCartItem = newCartItem.map((item) => {
        return {count: 1, ...item}
    })
    
    return {...state, cart: [...state.cart, ...updatedCartItem]}
  }
  // Increase item 
  else if(action.type === "IncreaseCount"){
    const updatedItem = state.cart.map((item) => {
      if(item.id === action.payload){
        return {...item, count:item.count+1}
      }
      return item;
    })
    return {...state, cart: updatedItem}
  }
  // Decrease item
  else if(action.type === "DecreaseCount"){
    const updatedItem = state.cart.map((item) => {
      if(item.id === action.payload){
        return {...item, count:item.count-1}
      }
      return item;
    })
    return {...state, cart: updatedItem}
  }
  // Delete item in cart
  else if(action.type === "DeleteItem"){
    console.log("deleteing item")
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {...state, cart: newCart}
  }
  // default
  return state;
}

const initialState = {
  products: [],
  categories:['all'],
  cart:[]
}

function ProductDetailsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)

    // fetch data
    useEffect(() => {
        fetchProducts()
    },[])

    async function fetchProducts(){
      const result = await getAllProducts()
      // setProducts(result.data)
      console.log("Fetching data");
      dispatch({type:'FetchData', payload: result.data})
    }

    // set category 
    useEffect(() => {
      const productcategory = state.products?.map(item => item.category)
      dispatch({type:"SET_CATEGORY", payload: new Set(productcategory)})
    }, [state.products])

    // add to cart
    const addToCart = (id) => {
      dispatch({type:"AddToCart", payload:id})
    }

    // increase cart count 
    const increaseCount = (id) => {
      dispatch({type: "IncreaseCount", payload: id})
    }

    const decreaseCount = (id) => {
      dispatch({type: "DecreaseCount", payload: id})
    }

    const deleteItem = (id) => {
      console.log("item deleted")
      dispatch({type: "DeleteItem", payload: id})
    }

    return (
      <ProductContext.Provider 
        value={{ 
                addToCart,
                cart: state.cart,
                categories: state.categories, 
                fetchProducts,
                products: state.products, 
                increaseCount,
                decreaseCount,
                deleteItem
                }}
      >
        {children}
      </ProductContext.Provider>
    )
}

const styles = StyleSheet.create({
   container:{}
})

export default ProductDetailsProvider