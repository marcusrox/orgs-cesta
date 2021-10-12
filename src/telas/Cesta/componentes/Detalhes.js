import React from "react";
import { StyleSheet, Image, View, Alert } from "react-native";
import Botao from "../../../componentes/Botao";
import Texto from "../../../componentes/Texto";

export default function Detalhes({ detalhes }) {
  return (
    <>
      <Texto style={styles.nome}>{detalhes.nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={detalhes.logoFazenda} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{detalhes.nomeFazenda}</Texto>
      </View>
      <Texto style={styles.descricao}>{detalhes.descricao}</Texto>
      <Texto style={styles.preco}>{detalhes.preco}</Texto>
      <Botao
        style={styles.botao}
        onPress={() =>
          Alert.alert("Confirmação", "Tem certeza que quer comprar?")
        }
      >
        Comprar
      </Botao>
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 22,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 6,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
  },

});
