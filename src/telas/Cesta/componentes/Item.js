import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import Texto from '../../../componentes/Texto';


export default function Item({item: {nome, imagem}}) {
    return <View style={estilos.item}>
              <Image source={imagem} style={estilos.imagem}></Image>
              <Texto style={estilos.nome}>{nome}</Texto>
            </View>
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 12,
    marginHorizontal: 16,
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
    color: "#464646",
  },
});