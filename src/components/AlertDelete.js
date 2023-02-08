
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { Text } from 'react-native';

export function AlertDelete({ visible, setVisible }) {
    const hideDialog = () => setVisible(false);
  
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title style={styles.title}>Deletar estudante</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">So pode deletar o dono do email</Text>
            <Button onPress={()=>alert("clicou")} mode='outlined' textColor='red'>Deletar</Button>
          </Dialog.Content>
        </Dialog>
      </Portal>
    )
  }

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
    },
  })