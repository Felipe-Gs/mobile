import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import { Text } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

export function AlertDelete({ visible, setVisible, id }) {
  const { navigate } = useNavigation();

  const hideDialog = () => setVisible(false);
  const { handleDelete, status } = useAuth();
  if (status === true) {
    navigate("Login");
  }
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>Deletar estudante</Dialog.Title>
        <Dialog.Content>
          <Text style={{ marginBottom: 10 }} variant="bodyMedium">
            Somente o dono do email pode deletar o seu email
          </Text>
          <Button
            onPress={() => handleDelete(id)}
            mode="outlined"
            textColor="red"
          >
            Deletar
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
