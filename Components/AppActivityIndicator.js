import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

function AppActivityIndicator({visible=false}) {
    if(!visible) return null
    return (
       <LottieView
            source={require('../assets/loading.json')}
            autoPlay
            loop
       />
    )
}

const styles = StyleSheet.create({
   container:{}
})

export default AppActivityIndicator