import { View, Text } from 'react-native'
import React from 'react'

import { Button, Paragraph, TextInput,  Avatar, Card, IconButton } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';

export default function CardInfo({nome, email}) {
  return (
    <Card.Title
        title={nome}
        subtitle={email}
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <Feather name="more-vertical" size={24} color="black" />}
        style={{marginBottom:20}}
      />
    
  )
}