import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../../axios/api";
import { useAuth } from "../../hooks/useAuth";

import { Button, Searchbar } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

import { Checkbox } from "react-native-paper";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CardInfo from "../../components/CardInfo";

export default function EstudanteVolta() {
  const { estudante } = useAuth();
  const { navigate } = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [dados, setDados] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dadosIniciais, setDadosIniciais] = useState();

  const [checked, setChecked] = useState(false);
  const [volta, setVolta] = useState(false);

  const atualizarVolta = async () => {
    try {
      await api.put(`/volta/${estudante.id}`, {
        volta,
      });
      alert("opção atualizada");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleVolta = async () => {
    setChecked(!checked);
    setVolta(!checked);
  };

  useEffect(() => {
    const listarEstudantesVoltam = async () => {
      try {
        const response = await api.get("/estudanteVolta");
        const dados = response.data;
        setDados(dados);
        setDadosIniciais(dados);
      } catch (error) {
        console.log(error);
      }
    };
    listarEstudantesVoltam();
  }, [dados]);

  const filterData = (query) => {
    if (!dadosIniciais) return;
    const filteredData = dadosIniciais.filter((item) =>
      item.nome.toLowerCase().includes(query.toLowerCase())
    );
    setDados(filteredData);
  };

  return (
    <SafeAreaView style={style.container}>
      {estudante && (
        <Text
          style={{ fontSize: 20, alignSelf: "flex-start", marginBottom: 10 }}
        >
          Bem vindo(a) {estudante.nome}
        </Text>
      )}

      <Searchbar
        placeholder="Buscar..."
        onChangeText={(text) => {
          setSearchQuery(text);
          filterData(text);
        }}
        value={searchQuery}
      />

      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          toggleVolta();
        }}
      />
      <Button mode="outlined" onPress={atualizarVolta}>
        Enviar
      </Button>

      <Text style={{ marginTop: 20, fontSize: 22 }}>
        Estudantes que voltam hoje:
      </Text>
      {dados ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
          data={dados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: "100%", height: 100 }}>
              <CardInfo nome={item.nome} email={item.email} />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
      <TouchableOpacity
        style={style.arrowGo}
        onPress={() => navigate("Listar")}
      >
        <Ionicons name="chevron-back-outline" size={28} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginTop: 50,
  },
  textOnibus: {
    fontSize: 25,

    fontFamily: "Roboto",
    marginTop: 15,
    marginBottom: 15,
  },
  Inputs: {
    width: 300,
    height: 60,
    marginTop: 20,
  },
  ViewInputs: {},
  arrowGo: {
    position: "absolute",
    right: 50,
    bottom: 30,
    zIndex: 1,
  },
});
