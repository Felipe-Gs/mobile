import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'; 

import { useNavigation} from "@react-navigation/native";
import { Login } from '../Login/Login';
import api from '../../axios/api';


export function Home() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [error, setError] = useState("")
    

    const {navigate} = useNavigation();

    const handleCadastro = async()=>{
      if(email === '' || senha === '' || nome === '' ){
        setError('Insira os dados corretamente')
        return
      }
      try {
        const response = await api.post("/inserir", 
         {email, senha, nome}
        );
        alert('Usuario cadastrado com sucesso')
        navigate('Login')
      } catch (error) {
        setError('Usuario nao foi cadastrado')
      }
    }

  return (
    <SafeAreaView style={style.container}>
        <TouchableOpacity style={ style.arrowBack } onPress={()=> navigate('Login')}>
            <Ionicons name="chevron-back-outline" size={28} color="black" />
        </TouchableOpacity>
        <Image style={{width:350, height:250,}} source={require('../../imgs/logo.png')}/>
        <Text style={style.textOnibus}>Cadastro</Text>
        <View style={style.ViewInputs}>
          <TextInput style={style.Inputs} type='outlined' label='Email' value={email}  onChangeText={text => setEmail(text)}/>
          <TextInput style={style.Inputs} type='outlined' label='Senha' value={senha}  onChangeText={text => setSenha(text)}/>
          <TextInput style={style.Inputs} type='outlined' label='Nome' value={nome}  onChangeText={text => setNome(text)}/>
          {error && <Text>{error}</Text>}
        </View>
        <View style={{alignItems:"center", marginTop:20}}>
          <Button mode="outlined" width={300} onPress={()=>handleCadastro()}>
              Cadastrar
          </Button>
          <Text style={{marginTop:10}}>Verifique seus dados antes de cadastrar</Text>
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
        marginTop:20
    },
    ViewInputs:{
        
    },
    arrowBack:{
        position: 'absolute',
        top: 50,
        left: 20,
        padding: 20,
        zIndex:1
    }
})