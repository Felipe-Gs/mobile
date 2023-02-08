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

import { Searchbar, Dialog, Portal, } from 'react-native-paper';
import {ActivityIndicator} from 'react-native-paper';

import CardInfo from '../../components/CardInfo';
import AlertDelete from '../../components/AlertDelete';



export function Listar() {
  const { estudante } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
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
  const [visible, setVisible] = useState(false)
  

  
  return (
    <SafeAreaView style={style.container}>
      
      {estudante && <Text style={{fontSize:20, alignSelf:'flex-start', marginBottom:10}}>Bem vindo(a) {estudante.nome}</Text>}
      
      <Searchbar 
        placeholder="Buscar..."
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
      />
      <ScrollView style={{width:'100%', height:'100%'}}>
        {dados? 
          dados.filter(dado => dado.nome.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((item, index) => {
            return (
              <View style={{width:'100%', height:100}} key={index}>
                <CardInfo nome={item.nome} email={item.email} id={item.id} />
              </View>
            );
          })
        : <ActivityIndicator/>}
      </ScrollView>
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