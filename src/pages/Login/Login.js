import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Paragraph, TextInput } from 'react-native-paper'
import { useNavigation} from "@react-navigation/native";
import api from '../../axios/api';
import axios from 'axios';



export function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  
  const [dados, setDados] = useState([])

  const {navigate} = useNavigation();

  const handleLogin = async() => {
    try {
      const response = await api.post('/login', 
        {email: email, senha: senha}
      )
      setError('vode pode logar')
    }catch(error){
      setError(error.message)
    }
  }

 
  
  return (
    <SafeAreaView style={style.container}>
      <Image style={{width:350, height:250}} source={require('../../imgs/logo.png')}/>
      <Text style={style.textOnibus}>Onibus App</Text>
      <View style={style.ViewInputs}>
        <TextInput style={style.Inputs} type='outlined' label='email' value={email}  onChangeText={text => setEmail(text)}/>
        <TextInput style={style.Inputs} secureTextEntry={true} type='outlined' label='senha' value={senha}  onChangeText={text => setSenha(text)}/>
        {error && <Text>{error}</Text>}
      </View>
      <Button marginTop={15} mode="outlined" width={300} onPress={()=>handleLogin()}>
            Entrar
      </Button>
      <View style={{alignItems:"center", marginTop:20}}>
        <Text>ou</Text>
        <View style={{flexDirection:"row" }}>
            <Text style={{marginRight:10}}>Não tem conta?</Text>
            <TouchableOpacity onPress={()=> navigate('Home')}>
                <Text style={{fontWeight:'bold'}}>SingUp</Text>
            </TouchableOpacity>
        </View>
      </View> 
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20, 
        alignItems:"center",
        justifyContent:'center',
    },
    textOnibus:{
        fontSize:25,

        fontFamily: 'Roboto',
        marginTop:15,
        marginBottom:15
    },
    Inputs:{
        width:300,
        height:60,
        marginTop:20,
    },
    ViewInputs:{
        
    }
})