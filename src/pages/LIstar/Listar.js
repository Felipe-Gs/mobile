import { View, 
  Text,
   StyleSheet, 
   SafeAreaView, 
   Image, TouchableOpacity, Alert, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Paragraph, TextInput,  Avatar, IconButton } from 'react-native-paper'
import { useNavigation} from "@react-navigation/native";
import api from '../../axios/api';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/useAuth';

import { Searchbar } from 'react-native-paper';
import {ActivityIndicator} from 'react-native-paper';

import CardInfo from '../../components/CardInfo';



export function Listar() {
  const { estudante } = useAuth();

  const [dados, setDados] = useState()
  const {navigate} = useNavigation();

  const handleLogin = async() => {
    
    try {
        const response = await api.get('/listar')
        const dados = response.data.nome
        setNome(dados)
        console.log(dados)
    } catch (error) {
        
    }
  }

  useEffect(()=>{
    const listarDados = async()=>{
        try {
            const response = await api.get('/listar')
            const dados = response.data
            setDados(dados) 
        } catch (error) {
            console.log(error)
        }
    }
    listarDados();

  },[]);
  
  return (
    <SafeAreaView style={style.container}>
      {estudante && <Text style={{fontSize:20, alignSelf:'flex-start', marginBottom:10}}>Bem vindo(a) {estudante.nome}</Text>}
      
      <Searchbar 
        placeholder="Buscar..."
        // onChangeText={onChangeSearch}
        // value={searchQuery}
      />
      <ScrollView style={{width:'100%', height:'100%'}}>
        {dados? 
        dados.map((item, index) => {
          return (
            <View style={{width:'100%', height:100}} key={index}>
              <CardInfo nome={item.nome} email={item.email} />
            </View>
          );
        }): <ActivityIndicator/>}
      </ScrollView>
      {/* <FlatList
        data={dados}
        renderItem={({ item, index }) => (
          <View style={{width:'100%', height:100,}} key={index}>
            <CardInfo nome={item.nome} email={item.email} />
          </View>
        )}
      /> */}
    
      
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20, 
        alignItems:"center",
        marginTop:50
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