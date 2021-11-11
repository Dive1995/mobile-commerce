import React from 'react';
import { StyleSheet} from 'react-native';
import ProductDetailsProvider from './context/ProductDetailsProvider';
import CartScreen from './Screens/CartScreen';
import ProductListing from './Screens/ProductListing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductItem from './Screens/ProductItem';



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <ProductDetailsProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={ProductListing}/>
          <Stack.Screen name="Cart" component={CartScreen}/>
          <Stack.Screen name="Product" component={ProductItem}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProductDetailsProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
