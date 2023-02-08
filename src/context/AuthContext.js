import { createContext, useState } from "react";
import api from "../axios/api";

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
        //   console.log(response.data.estudante)
          console.log(estudante.id)
          return response.data.email
        }catch(error){
          setError(error.message)
        }
      }

    return (
        <AuthContext.Provider
          value={{
            handleLogin,
            error, 
            setError,
            setError,
            email, 
            senha, 
            setEmail, 
            setSenha,
            estudante
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}