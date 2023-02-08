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