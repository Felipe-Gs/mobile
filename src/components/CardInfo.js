import { View, Text } from 'react-native'
import React, {useState} from 'react'

import { Button, Paragraph, TextInput,  Avatar, Card, IconButton } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { AlertDelete } from './AlertDelete';


export default function CardInfo({nome, email, id}) {
  const [visible, setVisible] = useState(false)

  const showDialog = () => setVisible(true);

  return (
    <>
      <Card.Title
        title={nome}
        subtitle={email}
        id={id}
        
        // id={id}
        left={(props) => <EvilIcons name="user" size={40} color="purple" />}
        right={(props) => (
            <AntDesign name="delete" size={24} color="purple" onPress={showDialog} />
          )}
        style={{marginBottom:20}}
      />
      <AlertDelete visible={visible} setVisible={setVisible} id={id} />
    </>
  )
}