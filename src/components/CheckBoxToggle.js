import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button, Checkbox} from 'react-native-paper'
import api from '../axios/api'

import { useAuth } from '../hooks/useAuth';

export default function CheckBoxToggle() {
  // const [checked, setChecked] = useState(false);
  const { estudante } = useAuth();

  const [volta, setVolta] = useState(false)

  const handleVolta = async()=>{
    try {
      const response = await api.put(`/volta/${estudante.id}`, {
        volta
      })
      alert('Dados atualizados')
    } catch (error) {
      console.error(error)
    } 
  }

  return (
    <View style={{width:'100%', flexDirection:'column', alignItems:"center", justifyContent:"space-around", marginTop:15}}>
      <Text>Voce vai voltar?</Text>
      <View style={{flexDirection:'row', alignItems:"center", marginTop:10}}>
        <Checkbox 
          status={volta ? 'checked' : 'unchecked'}
          onPress={() => {
            setVolta(!volta);
          }}
        />
        <Button mode='outlined' onPress={handleVolta}>Enviar</Button>
      </View>
    </View>
  )
}