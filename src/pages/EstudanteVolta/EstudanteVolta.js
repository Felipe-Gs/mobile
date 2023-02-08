import { View, 
    Text,
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity} from 'react-native'
 import React, { useEffect, useState } from 'react'
 import { useNavigation} from "@react-navigation/native";
 import api from '../../axios/api';
 import { useAuth } from '../../hooks/useAuth';
 
 import { Searchbar } from 'react-native-paper';
 import {ActivityIndicator} from 'react-native-paper';
 
 import CardInfo from '../../components/CardInfo';
 import AlertDelete from '../../components/AlertDelete';
 import CheckBoxToggle from '../../components/CheckBoxToggle';
 import { Entypo } from '@expo/vector-icons'; 
 
 
 
 export default function EstudanteVolta() {
   const { estudante } = useAuth();
 
   const [searchQuery, setSearchQuery] = useState('');
   const [dados, setDados] = useState()
   const {navigate} = useNavigation();
 

   const [visible, setVisible] = useState(false)
   
 
   
   return (
     <SafeAreaView style={style.container}>
       
       {estudante && <Text style={{fontSize:20, alignSelf:'flex-start', marginBottom:10}}>Bem vindo(a) {estudante.nome}</Text>}
       
       <Searchbar 
         placeholder="Buscar..."
         onChangeText={query => setSearchQuery(query)}
         value={searchQuery}
       />
       <Text style={{marginTop:20}}>Estudantes que voltam hoje:</Text>
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
         : ''}
         {/* <ActivityIndicator/> */}
       </ScrollView>
       <TouchableOpacity style={style.arrowGo} onPress={()=>navigate('Listar')}>
         <Entypo name="chevron-right" size={30} color="black" />
       </TouchableOpacity>
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
         
     },
     arrowGo:{
       position: 'absolute',
       right: 50,
       bottom:30,
       zIndex:1
   }
 })  