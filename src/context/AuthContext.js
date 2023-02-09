import { createContext, useEffect, useState } from "react";
import api from "../axios/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = "AUTH_KEY";

export const AuthContext =createContext({})

export function AuthContextProvider({children}){

    const [estudante, setEstudante] = useState()
  
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const handleLogin = async() => {
        try {
          if(email === '' || senha === '') {
            setError('Insira os dados corretamente')
            return
          }
          const response = await api.post('/login', 
            {email: email, senha: senha}
          )
          setEstudante(response.data.estudante)
          await AsyncStorage.setItem(KEY, JSON.stringify(response.data.estudante))
        //   console.log(response.data.estudante)
          console.log(estudante)
          return response.data.email
        }catch(error){
          setError(error.message)
        }
      }


      //deletar
      const [status, setStatus] = useState(false)
      const handleDelete = async(id) => {
        try {
          if(estudante.id === id){
            const response = await api.delete(`/deletar/${id}`)
            setStatus(true)
            alert(response.data)
            setStatus(false)
          }else{
            alert('Voce nao pode deletar esse estudante!')
          }
        } catch (error) {
          alert(error.message)
        }finally{
        }
      }

      //checar se ta autenticado
      useEffect(()=>{
        async function checkAuth(){
          const storedData = await AsyncStorage.getItem(KEY);
          if(storedData){
            setEstudante(JSON.parse(storedData));
          }
        }
        checkAuth();
      },[]);

      //buscar dados dos estudante que voltam no onibus
      
    return (
        <AuthContext.Provider
          value={{
            handleLogin,
            setError,
            setError,
            setEmail, 
            setSenha,
            handleDelete,

            error, 
            email, 
            senha, 
            estudante,
            status
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}