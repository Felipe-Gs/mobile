import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";

import {
  Button,
  Paragraph,
  TextInput,
  Avatar,
  IconButton,
} from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";
import React from "react";

export default function BuscarDados() {
  const [searchQuery, setSearchQuery] = useState("");
  // dentro desses dados vai ser colocados os dados vindo da api
  const [dados, setDados] = useState();

  return (
    <View>
      {/* barra de busca de dados */}
      <Searchbar
        placeholder="Buscar..."
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
      />
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* renderiza os dados de acordo com o nome que o usuario digita */}
        {dados ? (
          dados
            .filter((dado) =>
              dado.nome.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item, index) => {
              return (
                <View style={{ width: "100%", height: 100 }} key={index}>
                  <CardInfo nome={item.nome} email={item.email} id={item.id} />
                </View>
              );
            })
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
}
