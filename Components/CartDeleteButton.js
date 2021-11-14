import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ProductContext } from '../context/ProductDetailsProvider'

function CartDeleteButton({id}) {
    const {deleteItem} = useContext(ProductContext);

    return (
       <TouchableOpacity onPress={() => deleteItem(id)} style={styles.container}>
          <MaterialCommunityIcons name="trash-can" size={30} color="white"/>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   container:{
       height:"90%",
       alignSelf:"center",
       width:80,
       backgroundColor:"red",
       borderRadius:15,
       justifyContent:"center",
       alignItems:"center",
   }
})

export default CartDeleteButton