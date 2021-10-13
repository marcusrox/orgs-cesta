import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import Texto from '../../../componentes/Texto';

export default function Items({itens}) {
    return (
      <>
        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
        {itens.lista.map(({ nome, imagem }) => {
          return (
            <View key={nome} style={estilos.item}>
              <Image source={imagem} style={estilos.imagem}></Image>
              <Texto style={estilos.nome}>{nome}</Texto>
            </View>
          );
        })}
      </>
    );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 24,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 12,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    color: '#464646'
  },
});