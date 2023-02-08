import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Button, Checkbox} from 'react-native-paper'

export default function CheckBoxToggle() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{width:'100%', flexDirection:'column', alignItems:"center", justifyContent:"space-around", marginTop:15}}>
      <Text>Voce vai voltar?</Text>
      <View style={{flexDirection:'row', alignItems:"center", marginTop:10}}>
        <Checkbox 
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Button mode='outlined'>Enviar</Button>
      </View>
    </View>
  )
}