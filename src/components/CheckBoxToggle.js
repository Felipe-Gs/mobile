import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button, Checkbox} from 'react-native-paper'
import api from '../axios/api'

import { useAuth } from '../hooks/useAuth';

export default function CheckBoxToggle() {
  // const [checked, setChecked] = useState(false);
  const { estudante } = useAuth();
  const [volta, setVolta] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function getInitialValue() {
      setLoading(true);

      try {
        const response = await api.get(`/volta/${estudante.id}`);
        setVolta(response.data.volta);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    getInitialValue();
  },[])

  const handleVolta = async()=>{
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      await api.put(`/volta/${estudante.id}`, {
        volta
      })
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(err);
      setLoading(false);
    } 
  }

  return (
    <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginTop: 15 }}>
      <Text>Você vai voltar?</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Checkbox
          status={volta ? 'checked' : 'unchecked'}
          onPress={() => {
            setVolta(!volta);
          }}
        />
        <Button mode='outlined' onPress={handleVolta}>Enviar</Button>
      </View>
      {loading && <Text>Carregando...</Text>}
      {success && <Text>Dados atualizados com sucesso!</Text>}
      {/* {error && <Text>Ocorreu um erro: {error.message}</Text>} */}
    </View>
  )
}