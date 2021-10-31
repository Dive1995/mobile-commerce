import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllProducts } from './api/products';
import Screen from './Components/Screen';

const ProductContext = React.createContext()

export default function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts(){
      const result = await getAllProducts()
      console.log({result});

    }

    fetchProducts()
  },[])

  return (
    <ProductContext.Provider value={data = "helllo"}>
      <Screen style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Screen>
    </ProductContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
