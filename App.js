import React from 'react';
import { StyleSheet} from 'react-native';
import ProductDetailsProvider from './context/ProductDetailsProvider';
import ProductListing from './Screens/ProductListing';


export default function App() {

  return (
    <ProductDetailsProvider>
      <ProductListing/>
    </ProductDetailsProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
