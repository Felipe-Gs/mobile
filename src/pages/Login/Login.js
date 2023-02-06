import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export function Login() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textOnibus}>Onibus App</Text>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20, 
        alignItems:"center",
        marginTop:30
    },
    textOnibus:{
        fontSize:22,
        fontFamily: 'Roboto',
    }
})